/*
 * @Descripttion: 
 * @Author: Yxw
 * @Date: 2024-09-02 19:46:05
 * @LastEditTime: 2024-09-03 16:52:57
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/

const COMPONENTS = [
  "Alert",
  "Button",
  "Collapse",
  "Dropdown",
  "Form",
  "Icon",
  "Input",
  "Loading",
  "Message",
  "MessageBox",
  "Notification",
  "Overlay",
  "Popconfirm",
  "Select",
  "Switch",
  "Tooltip",
  "Upload"
] as const;

export default defineConfig({
  build: {
    outDir: "dist/esm",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "element-minus",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator",
      ],
      output: {
        assetFileNames: (assetInfo) => {
            if(assetInfo.name === "style.css") return "index.css";
            return assetInfo.name as string;
        },
        manualChunks(id) {
          if(id.includes("node_modules")) return "vendor";
          if(id.includes("packages/hooks")) return "hooks";
          if(id.includes("packages/utils")) return "utils";
          for(const component of COMPONENTS) {
            if(id.includes(`packages/components/${component}`)) return component;
          }
        }
      },
    },
  },
  plugins: [vue(),dts({
    tsconfigPath: "../../tsconfig.build.json",
    outDir: "dist/types",
  })],
});
