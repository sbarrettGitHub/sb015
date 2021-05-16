import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import i18n, { getDefaultLocale } from "../i18n";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter(to, from, next) {
      if (!to.params.locale) {
        return next(getDefaultLocale());
      }
      const paramLocale: string = Array.isArray(to.params.locale)
        ? to.params.locale[0]
        : to.params.locale;

      if (!i18n.global.availableLocales.includes(paramLocale)) {
        return next(i18n.global.locale.value);
      }
      if (i18n.global.locale.value !== paramLocale) {
        i18n.global.locale.value = paramLocale;
      }

      return next();
    },
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        alias: "",
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
