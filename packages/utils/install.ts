/*
 * @Descripttion: 组件 install 方法
 * @Author: Yxw
 * @Date: 2024-08-19 17:29:20
 * @LastEditTime: 2024-08-19 17:49:16
 */
import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
    const installer = (app: App) => each(components, (component) => app.use(component))
  
    return installer as Plugin
}

export function withInstall<T>(component: T) {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any)?.name || "UnnamedComponent";
        app.component(name, component as SFCWithInstall<T>);
    };
    return component as SFCWithInstall<T>;
}

