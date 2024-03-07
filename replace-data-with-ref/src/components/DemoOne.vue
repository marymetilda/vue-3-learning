<template>
  <h2>
    {{ name }}
  </h2>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DemoOne",
  setup() {
    const name = ref("Sample Name");

    setTimeout(() => {
      name.value = "Test name";
    }, 2000);

    return {
      name,
    };
  },
};
</script>

<style scoped></style>
