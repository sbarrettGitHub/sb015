<template>
  <nav class="">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo left">SB015</router-link>
      <ul class="right">
        <li>
          <a class="btn waves-effect waves-light" href="#">Place Ad</a>
        </li>
        <li class="hide-on-med-and-down">
          <a href="#">Login</a>
        </li>
        <li class="hide-on-med-and-down">
          <a href="#">Sign up</a>
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
      </ul>
    </div>
  </nav>
  <ul class="sidenav sidenav-close" id="mobile-demo">
    <li>
      <a href="#"><i class="material-icons">description</i>My Ads</a>
    </li>
    <li>
      <a href="#"><i class="material-icons">comment_blank</i>Messages</a>
    </li>
    <li>
      <a href="#"><i class="material-icons">favorite</i>Saved Ads</a>
    </li>
    <li>
      <a href="#"><i class="material-icons">star</i>Saved Searches</a>
    </li>
    <li class="divider"></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import M from "materialize-css";
export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      M.AutoInit();
    });
  },
});
</script>
<style lang="scss">
@import "./styles/app.scss"
</style>
