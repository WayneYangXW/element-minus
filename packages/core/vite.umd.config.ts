import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "element-minus",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
            if(assetInfo.name === "style.css") return "index.css";
            return assetInfo.name as string;
        }
      },
    },
  },
  plugins: [vue()],
});
