<template>
  <h2>{{ state.firstName }} {{ state.lastName }}</h2>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "DemoTwo",
  setup() {
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });

    return {
      state,
    };
  },
};
</script>

<style scoped></style>
