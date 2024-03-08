<template>
  <LifeCycleC />
  <LifeCycleO />
</template>

<script>
import LifeCycleO from "./components/LifeCycleO.vue";
import LifeCycleC from "./components/LifeCycleC.vue";

export default {
  name: "App",
  components: {
    LifeCycleO,
    LifeCycleC,
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
