<template>
  <select v-model="locale" class="browser-default">
    <option v-for="loc in availableLocales" :key="`locale-${loc}`" :value="loc">
      {{ loc }}
    </option>
  </select>
</template>
<script>
import { useI18n } from "vue-i18n";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PickLanguage",
  setup() {
    const { locale, availableLocales } = useI18n();
    const router = useRouter();

    watch(locale, (loc) => {
      router.replace({ params: { locale: loc } }).catch(() => {
        router.push("/");
      });
      localStorage.setItem("locale", loc);
    });
    return { locale, availableLocales };
  },
};
</script>
