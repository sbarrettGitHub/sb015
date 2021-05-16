import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import i18n from "./i18n";

createApp(App).use(router).use(i18n).mount("#app");
