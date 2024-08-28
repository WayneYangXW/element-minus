/*
 * @Descripttion: 
 * @Author: Yxw
 * @Date: 2024-08-19 22:16:15
 * @LastEditTime: 2024-08-19 23:00:13
 */
import { makeInstaller } from "@element-minus/utils";
import components from "./components";
import "@element-minus/theme/index.css"

const installer = makeInstaller(components);

export * from "@element-minus/components"
export default installer;