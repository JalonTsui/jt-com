import { BuildOptions, defineConfig, loadEnv, ServerOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { extractFileNameWithoutExtension as _getFileName } from "./utils";
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
  // 打包的时候public文件夹下面的文件会自动打包到dist文件夹下
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
        index: resolve(__dirname, "src/entry/index.html"),
        // about: resolve(__dirname, "src/entry/about.html"),
      },
      output: {
        // TODO: 把html分开打包成一个独立文件
        compact: true,
        // 静态文件不一定会有引用路径即moduleIds
        chunkFileNames: (_info: any) => {
          return "share/js/[name]-[hash].js";
          // console.log("chunk", _info);
          // const resourceList = _info.moduleIds;
          // const rootName =
          //   resourceList && resourceList.length
          //     ? getFileName(resourceList[resourceList.length - 1])
          //     : false;
          // if (!rootName) {
          //   return "share/js/[name]-[hash].js";
          // }
          // return `${rootName}/js/[name]-[hash].js`;
        },
        entryFileNames: (_info: any) => {
          return "share/js/[name]-[hash].js";
          // console.log("entry", _info);
          // const resourceList = _info.moduleIds;
          // const rootName =
          //   resourceList && resourceList.length
          //     ? getFileName(resourceList[resourceList.length - 1])
          //     : false;
          // if (!rootName) {
          //   return "share/js/[name]-[hash].js";
          // }
          // return `${rootName}/js/[name]-[hash].js`;
        },
        assetFileNames: (_info: any) => {
          return "share/[ext]/[name]-[hash].[ext]";
        },
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

  // 配置开发环境下的server,当server的open设置的时候，package.json里面的--open需要取消，否则无法正常使用
  const server: ServerOptions = {
    host: "0.0.0.0",
    port: 8787,
    strictPort: true,
    open: "/src/entry/index.html",
  };

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
        "i@": resolve(__dirname, "src/resource/index"),
        "a@": resolve(__dirname, "src/resource/about"),
        "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
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
    server,
  };
});
