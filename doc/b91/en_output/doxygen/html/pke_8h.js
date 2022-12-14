var pke_8h =
[
    [ "eccp_curve_t", "structeccp__curve__t.html", "structeccp__curve__t" ],
    [ "mont_curve_t", "structmont__curve__t.html", "structmont__curve__t" ],
    [ "edward_curve_t", "structedward__curve__t.html", "structedward__curve__t" ],
    [ "GET_WORD_LEN", "pke_8h.html#a5143dc81a3a52c08dfc8e8b452f91012", null ],
    [ "GET_BYTE_LEN", "pke_8h.html#aeb03d26c80d21e647fd14994126aef5e", null ],
    [ "PKE_BASE", "pke_8h.html#aeaee8432854ebc5ba31b62257fab785c", null ],
    [ "reg_pke_a_ram", "pke_8h.html#a94aa82b001af42e49e5262cd4dd64247", null ],
    [ "reg_pke_b_ram", "pke_8h.html#a0429ab4df80a4bf627082cc002e45b9c", null ],
    [ "PKE_OPERAND_MAX_WORD_LEN", "pke_8h.html#a28c77d4d6c727a7aa6e44c8b6f4b98ea", null ],
    [ "PKE_OPERAND_MAX_BIT_LEN", "pke_8h.html#a1ef8202002851f8c96071a6dfc1d8b46", null ],
    [ "ECC_MAX_WORD_LEN", "pke_8h.html#a93f98a99ad0cacc515cc7532f6cc4b50", null ],
    [ "ECC_MAX_BIT_LEN", "pke_8h.html#ada50838b4a5fa43f4589f7a510877ad6", null ],
    [ "pke_ret_code_e", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991", [
      [ "PKE_SUCCESS", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991a842fd1b426331e8f7f80bcfc07e4de5c", null ],
      [ "PKE_ACTIVE_STOP", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991a5b50df6f9eed7658f33a170ce77b0a6b", null ],
      [ "PKE_MOD_INV_NOT_EXIST", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991a1b5edcf370e0b95ed75681bb49d4ea51", null ],
      [ "PKE_POINT_NOT_ON_CURVE", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991aa54c7f1b266b76d668460424cca8ede4", null ],
      [ "PKE_INVALID_MICRO_CODE", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991a6890294cf51d5911d89aaaa327515997", null ],
      [ "PKE_POINTOR_NULL", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991ab3f12129f1f4f162512efd2523667323", null ],
      [ "PKE_INVALID_INPUT", "pke_8h.html#aeb43b6a17a65227a0e0ef9f65a074991a9635709aee67eb1464920139e364d3f1", null ]
    ] ],
    [ "pke_exe_cfg_e", "pke_8h.html#a138a37bd1472a84855ee0e9b1d40db72", [
      [ "PKE_EXE_CFG_ALL_NON_MONT", "pke_8h.html#a138a37bd1472a84855ee0e9b1d40db72a305bf791f99171855732f87ecce9c2c6", null ],
      [ "PKE_EXE_CFG_ALL_MONT", "pke_8h.html#a138a37bd1472a84855ee0e9b1d40db72a875994f06d6b7283a6ddd5057c6c00e3", null ]
    ] ],
    [ "pke_microcode_e", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2", [
      [ "PKE_MICROCODE_PDBL", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2aa6785bff1836d34a596b692feeff052f", null ],
      [ "PKE_MICROCODE_PADD", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2a7ec561b5df589780add60c43411f0c03", null ],
      [ "PKE_MICROCODE_PVER", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2a6746ed1fd6d7ba6cf1b19ae26eb48f3d", null ],
      [ "PKE_MICROCODE_PMUL", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2a138399628fb2a11d1d5853adc1b5d803", null ],
      [ "PKE_MICROCODE_MODMUL", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2af8dcdadd26ec9ebec87b1db2eb5cf13a", null ],
      [ "PKE_MICROCODE_MODINV", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2ade9d14f0c18f1c1c3033f56145325d0e", null ],
      [ "PKE_MICROCODE_MODADD", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2acc8037f942062a8638569949ad100885", null ],
      [ "PKE_MICROCODE_MODSUB", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2ac9599a0ae2431ac9eb6e2f911a3585f4", null ],
      [ "PKE_MICROCODE_CAL_PRE_MON", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2acfbb5a8bae6e4d25e1035506f3d5283b", null ],
      [ "PKE_MICROCODE_C25519_PMUL", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2ac83b6134b77d67f9666e1ec6dcc05486", null ],
      [ "PKE_MICROCODE_Ed25519_PMUL", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2a21b9ffbadb55a7b504ac20540cafa202", null ],
      [ "PKE_MICROCODE_Ed25519_PADD", "pke_8h.html#aa63da6e9766f964e05491caa54f5f3d2a9f45dd6435d5104b2449afd7e31fe343", null ]
    ] ],
    [ "pke_get_irq_status", "pke_8h.html#a8cafda3fe488b11af339377b41f0df1a", null ],
    [ "pke_clr_irq_status", "pke_8h.html#a0a44a76d5018c4549f12319f7ebecce2", null ],
    [ "pke_set_irq_mask", "pke_8h.html#a7535304318e7d32892d3f46d9caa1351", null ],
    [ "pke_clr_irq_mask", "pke_8h.html#aa82ff38c277325ed844b25ab78b0497f", null ],
    [ "pke_set_microcode", "pke_8h.html#ab88c5e300e10bb9d0af273400a08aadb", null ],
    [ "pke_set_exe_cfg", "pke_8h.html#a7283e839d0aa1ca9cea13cc2d93a9a12", null ],
    [ "pke_opr_start", "pke_8h.html#ab9368228ec05c9526086d1e3f1111380", null ],
    [ "pke_check_rt_code", "pke_8h.html#af6ef8b4237b30cce161a9eeb8f1f8751", null ],
    [ "pke_set_operand_width", "pke_8h.html#a636f0e65c0231842841385956c645c62", null ],
    [ "big_integer_compare", "pke_8h.html#a97016e8c2e9e2d64b648f65133a9eb59", null ],
    [ "sub_u32", "pke_8h.html#ad0fce90716882a800e186e70d9570dda", null ],
    [ "div2n_u32", "pke_8h.html#a4deb55ce4f3dd55423b54ba9458e6123", null ],
    [ "pke_load_pre_calc_mont", "pke_8h.html#aa5d8da60d95ff2207e5658026e747982", null ],
    [ "pke_calc_pre_mont", "pke_8h.html#a28d20df760273c32a38f3e47550d9344", null ],
    [ "pke_mod_mul", "pke_8h.html#a4a29578acb174f7977843f5bc5c7e80d", null ],
    [ "pke_mod_inv", "pke_8h.html#a1f0e0fa5fbeb0f563f4bd28fbe237860", null ],
    [ "pke_mod_add", "pke_8h.html#a1c4b7e4099cda185d20eb26ecf4eeae3", null ],
    [ "pke_mod_sub", "pke_8h.html#a76b9c0ac572333825309e123b50193d6", null ],
    [ "pke_mod", "pke_8h.html#afee9879c4a1196941327bdd46feedd4a", null ],
    [ "pke_eccp_point_del", "pke_8h.html#aee73e60ff79f27005a538bcc2d6549a7", null ],
    [ "pke_eccp_point_verify", "pke_8h.html#a8560739388a184d73beadb448b9c40ef", null ],
    [ "pke_eccp_point_mul", "pke_8h.html#a042ae714e58b288875e23267d2b4b89b", null ],
    [ "pke_eccp_point_add", "pke_8h.html#ae172ff3571747a8e1cc119fe06ea77a6", null ],
    [ "pke_x25519_point_mul", "pke_8h.html#ac457317498b84744aad2ba0a26a9c718", null ],
    [ "pke_ed25519_point_mul", "pke_8h.html#a835a09db72bce5c0d10fc1ef9ceeb036", null ],
    [ "pke_ed25519_point_add", "pke_8h.html#afca8cf45a7b0c5611294a9e0adecc195", null ]
];