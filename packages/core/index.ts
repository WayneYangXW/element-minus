/*
 * @Descripttion: 
 * @Author: Yxw
 * @Date: 2024-08-19 22:16:15
 * @LastEditTime: 2024-08-31 13:20:57
 */
import { makeInstaller } from "@element-minus/utils";
import components from "./components";
import "@element-minus/theme/index.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
const installer = makeInstaller(components);

export * from "../components"
export default installer;