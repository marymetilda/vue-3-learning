<template>
  <h2>Component E</h2>
  <ComponentF />
</template>

<script>
import ComponentF from "./ComponentF.vue";

export default {
  name: "ComponentE",
  components: {
    ComponentF,
  },
};
</script>

<style scoped></style>
