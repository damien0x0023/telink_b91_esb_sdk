/********************************************************************************************************
 * @file	app_config.h
 *
 * @brief	This is the header file for B91m 2.4G
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
#pragma once

#include <stdio.h>
#include "types.h"
#include "driver.h"
#include "tlsr_esb.h"

#include "bt_debug/dbgport.h"

#ifdef __cplusplus
extern "C" {
#endif

#define BLUE_LED        GPIO_PB4
#define GREEN_LED       GPIO_PB5
#define WHITE_LED       GPIO_PB6
#define RED_LED         GPIO_PB7

#define GPIO_DEBUG      GPIO_PD2

#define TELINK_HEADER   0xBB
#define ACK_COMMAND     0x0C
#define NACK_COMMAND    0x0D

void gpio_init(void);

uint32_t esb_init(void);

void esb_run_test(void);

#ifdef __cplusplus
}
#endif