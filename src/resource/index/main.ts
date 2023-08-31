import "i@/style/normalize.css";
import "i@/style/bootstrap/index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "i@/router";
import pinia from "i@/store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
