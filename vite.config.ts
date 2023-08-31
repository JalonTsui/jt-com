import { BuildOptions, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("当前环境是:", mode);
  // 获取需要的环境变量
  const env = loadEnv(mode, process.cwd(), "");
  const { PACKAGE_BASE_URL } = env;

  // 生产环境打包配置
  const prodBuildOptions: BuildOptions = {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  };

  // 公共打包配置
  const build: BuildOptions = {
    minify: "terser",
    rollupOptions: {
      // 打包分割node_modules里面的代码，让单个包不至于太大
      // manualChunks(id) {
      //   if (id.includes("node_modules")) {
      //     return id
      //       .toString()
      //       .split("node_modules/")[1]
      //       .split("/")[0]
      //       .toString();
      //   }
      // },
      input: {
        index: resolve(__dirname, "entry/index.html"),
        // about: resolve(__dirname, "entry/about.html"),
      },
      output: {
        // TODO: 把html分开打包成一个独立文件
        compact: true,
        chunkFileNames: (_info: any) => {
          // console.log(info);
          return "static/js/[name]-[hash].js";
        },
        entryFileNames: (_info: any) => {
          // console.log(info);
          return "static/js/[name]-[hash].js";
        },
        assetFileNames: "static/[ext]/name-[hash].[ext]",
      },
    },
  };

  switch (mode) {
    case "production":
      Object.assign(build, prodBuildOptions);
      break;
    case "test":
      break;
    default:
      break;
  }

  return {
    base: PACKAGE_BASE_URL,
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      legacy({
        //targets里可指定兼容到某一特定版本，默认为[ "defaults", "not IE 11"]；
        targets: ["chrome 80", "defaults", "not IE 11"],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/style/global.scss";',
        },
      },
    },
    build,
  };
});
