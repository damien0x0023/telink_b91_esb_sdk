/********************************************************************************************************
 * @file	app.c
 *
 * @brief	This is the source file for B91m 2.4G
 *
 * @author	Telink
 * @date	Aug 2, 2022
 *
 * @par     Copyright (c) 2022, Telink Semiconductor (Shanghai) Co., Ltd. ("TELINK")
 *          All rights reserved.
 *
 *          Licensed under the Apache License, Version 2.0 (the "License");
 *          you may not use this file except in compliance with the License.
 *          You may obtain a copy of the License at
 *
 *              http://www.apache.org/licenses/LICENSE-2.0
 *
 *          Unless required by applicable law or agreed to in writing, software
 *          distributed under the License is distributed on an "AS IS" BASIS,
 *          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *          See the License for the specific language governing permissions and
 *          limitations under the License.
 *
 *******************************************************************************************************/
#include "app_config.h"

static tlsr_esb_payload_t rx_payload;

static tlsr_esb_payload_t ack_payload = TLSR_ESB_CREATE_PAYLOAD(
    TLSR_ESB_PIPE0, 0xaa, 0xbb, 0xcc, 0xdd, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f,
    0x00, 0x11, 0x22, 0x33, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f);

static volatile uint32_t irq_cnt_tx = 0;
static volatile uint32_t irq_cnt_rx = 0;
static volatile uint32_t irq_cnt_ds = 0;
static volatile uint32_t irq_cnt_dr = 0;
static volatile uint8_t  rx_flag = 0;
static volatile uint32_t irq_cnt_invalid = 0;
static volatile uint32_t rx_cnt = 0;

static volatile uint32_t evt_tx_finish_cnt, evt_tx_failed_cnt, evt_rx_cnt;

_attribute_ram_code_sec_ __attribute__((optimize("-Os"))) void tlsr_esb_event_handler(tlsr_esb_event_id_t evt_id)
{
    switch (evt_id)
    {
    case TLSR_ESB_EVENT_TX_SUCCESS:
        evt_tx_finish_cnt++;
        break;
    case TLSR_ESB_EVENT_TX_FAILED:
        evt_tx_failed_cnt++;
        break;
    case TLSR_ESB_EVENT_RX_RECEIVED:
        tlsr_esb_read_rx_payload(&rx_payload);
        ack_payload.data[4]++;
        ack_payload.pipe = rx_payload.pipe;
        tlsr_esb_flush_tx(ack_payload.pipe);
        tlsr_esb_write_payload(&ack_payload);

        rx_flag = 1;
        evt_rx_cnt++;
        break;
    }
}

_attribute_ram_code_sec_ void rf_irq_handler(void)
{
    tlsr_esb_event_handler_t m_event_handler = tlsr_esb_get_event_handler();

    if (rf_get_irq_status(FLD_RF_IRQ_RX))
    {
        reg_rf_irq_status = FLD_RF_IRQ_RX;
        irq_cnt_rx++;
        if (m_event_handler) tlsr_esb_rx_irq_handler(m_event_handler);
    }

    if (rf_get_irq_status(FLD_RF_IRQ_RX_DR))
    {
        irq_cnt_dr++;
        reg_rf_irq_status = FLD_RF_IRQ_RX_DR;
    }

    if (rf_get_irq_status(FLD_RF_IRQ_TX_DS))
    {
        irq_cnt_ds++;
        reg_rf_irq_status = FLD_RF_IRQ_TX_DS;
    }

    if (rf_get_irq_status(FLD_RF_IRQ_TX))
    {
        irq_cnt_tx++;
        reg_rf_irq_status = FLD_RF_IRQ_TX;
        if (m_event_handler) m_event_handler(TLSR_ESB_EVENT_TX_SUCCESS);
    }

    if (rf_get_irq_status(FLD_RF_IRQ_INVALID_PID))
    {
        irq_cnt_invalid++;
        reg_rf_irq_status = FLD_RF_IRQ_INVALID_PID;
    }

    plic_interrupt_complete(IRQ15_ZB_RT);
    rf_clr_irq_status(0xffff);
}

void gpio_init(void)
{
    gpio_function_en(BLUE_LED | GREEN_LED | WHITE_LED | RED_LED);
    gpio_output_en(BLUE_LED | GREEN_LED | WHITE_LED | RED_LED);
    gpio_input_dis(BLUE_LED | GREEN_LED | WHITE_LED | RED_LED);

    gpio_function_en(GPIO_DEBUG);
    gpio_output_en(GPIO_DEBUG);
    gpio_input_dis(GPIO_DEBUG);
}

uint32_t esb_init(void)
{
    uint32_t err_code = 0;

    uint8_t base_address_0[4] = {0xE7, 0xE7, 0xE7, 0xE7};
    uint8_t base_address_1[4] = {0xC2, 0xC2, 0xC2, 0xC2};
    uint8_t addr_prefix[6] = {0xe7, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6};

    tlsr_esb_config_t tlsr_esb_config = TLSR_ESB_DEFAULT_CONFIG;

    tlsr_esb_config.mode = TLSR_ESB_MODE_PRX;
    tlsr_esb_config.event_handler = tlsr_esb_event_handler;
    tlsr_esb_config.bitrate = TLSR_ESB_BITRATE_2MBPS;
    tlsr_esb_config.tx_output_power_idx = RF_POWER_INDEX_P0p01dBm;
    tlsr_esb_config.retransmit_delay = 150;
    tlsr_esb_config.tx_settle = 118;
    tlsr_esb_config.rx_settle = 85;
    tlsr_esb_config.rx_timeout = 500;
    tlsr_esb_config.payload_length = 32;
    tlsr_esb_config.pipe = TLSR_ESB_PIPE0;
    tlsr_esb_config.irq_mask =
        FLD_RF_IRQ_RX | FLD_RF_IRQ_TX | FLD_RF_IRQ_TX_DS | FLD_RF_IRQ_RX_DR | FLD_RF_IRQ_TX_RETRYCNT;
    tlsr_esb_config.peer_is_nordic = false;

    err_code = tlsr_esb_init(&tlsr_esb_config);
    VERIFY_SUCCESS(err_code);

    tlsr_esb_set_address_length(TLSR_ESB_ADDRESS_WIDTH_5BYTES);

    err_code = tlsr_esb_set_base_address_0(base_address_0);
    VERIFY_SUCCESS(err_code);

    err_code = tlsr_esb_set_base_address_1(base_address_1);
    VERIFY_SUCCESS(err_code);

    err_code = tlsr_esb_set_prefixes(addr_prefix, 6);
    VERIFY_SUCCESS(err_code);

    return TLSR_SUCCESS;
}

void esb_run_test(void)
{
    ack_payload.data[0] = 1;
    ack_payload.data[1] = TELINK_HEADER;
    ack_payload.data[2] = ACK_COMMAND;
    ack_payload.data[3] = 0x00;

    tlsr_esb_start_rx();

    while (1)
    {
        if (rx_flag)
        {
            rx_flag = 0;

            rx_cnt++;
            if (rx_cnt % 50 == 0)
            {
                gpio_toggle(GREEN_LED);
            }
        }
    }
}
