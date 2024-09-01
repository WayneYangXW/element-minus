/*
 * @Descripttion: 
 * @Author: Yxw
 * @Date: 2024-09-01 21:11:13
 * @LastEditTime: 2024-09-01 21:14:37
 */
import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./types";

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> = Symbol(
    "BUTTON_GROUP_CTX_KEY"
);