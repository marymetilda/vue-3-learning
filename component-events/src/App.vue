<template>
  <h3>App component username {{ name }}</h3>
  <ComponentC />
</template>

<script>
import ComponentC from "./components/ComponentC.vue";

export default {
  name: "App",
  components: {
    ComponentC,
  },
  data() {
    return {
      name: "Sample user",
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
