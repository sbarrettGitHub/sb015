<template>
  <h1>Home Page</h1>
  {{ $t("menu.login") }}
  <div v-if="loading">Loading</div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "../store";
import { ActionTypes } from "../store/actions";
import { MutationType } from "../store/mutations";
export default {
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.GetTodoItems));
    setTimeout(() => {
      store.commit(MutationType.SetLoading, true);
    }, 5000);
    return { loading };
  },
};
</script>
