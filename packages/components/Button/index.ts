/*
 * @Descripttion: 
 * @Author: Yxw
 * @Date: 2024-08-19 21:44:19
 * @LastEditTime: 2024-08-19 22:34:33
 */
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@element-minus/utils/'

export const EmButton = withInstall(Button)
export const EmButtonGroup = withInstall(ButtonGroup)

export * from './types'
