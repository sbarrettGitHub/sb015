<template>
  <nav class="">
    <div class="nav-wrapper">
      <router-link :to="`/${locale}`" class="brand-logo left"
        >SB015</router-link
      >

      <ul class="right">
        <li>
          <a
            class="btn waves-effect waves-light"
            href="#"
            >{{ t("menu.placeAd") }}</a
          >
        </li>
        <li class="hide-on-med-and-down">
          <a href="#">{{ t("menu.login") }}</a>
        </li>
        <li>
          <a
            href="#"
            data-target="mobile-demo"
            class="sidenav-trigger show-on-large"
          >
            <i class="material-icons">account_circle</i>
          </a>
        </li>
        <li class="mr-1">
          <pick-language class="mt-2" />
        </li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav sidenav-close" id="mobile-demo">
    <li>
      <a href="#"><i class="material-icons">face</i>{{ t("menu.login") }}</a>
    </li>
    <li class="divider"></li>
    <li>
      <a href="#"
        ><i class="material-icons">add_box</i>{{ t("menu.placeAd") }}</a
      >
    </li>
    <li>
      <a href="#"
        ><i class="material-icons">description</i>{{ t("menu.myAds") }}</a
      >
    </li>
    <li>
      <a href="#"
        ><i class="material-icons">comment_blank</i>{{ t("menu.messages") }}</a
      >
    </li>
    <li>
      <a href="#"
        ><i class="material-icons">favorite</i>{{ t("menu.savedAds") }}</a
      >
    </li>
    <li>
      <a href="#"
        ><i class="material-icons">star</i>{{ t("menu.savedSearches") }}</a
      >
    </li>
    <li class="divider"></li>
    <li>
      <router-link :to="`/${locale}/about`"
        ><i class="material-icons">info</i>{{ t("menu.about") }}</router-link
      >
    </li>
  </ul>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import M from "materialize-css";
import { useI18n } from "vue-i18n";
import PickLanguage from "./components/nav/PickLanguage.vue";
export default defineComponent({
  name: "App",
  components: { PickLanguage },
  setup() {
    const { t, locale } = useI18n();
    onMounted(() => {
      M.AutoInit();
    });
    return {
      t,
      locale,
    };
  },
});
</script>
<style lang="scss">
@import "./styles/app.scss";
</style>
