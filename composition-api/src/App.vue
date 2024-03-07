<template>
  <MethodsComponent />
  <VModel />
  <ComputedComponent />
</template>

<script>
import MethodsComponent from "./components/MethodsComponent";
import VModel from "./components/VModel";
import ComputedComponent from "./components/ComputedComponent";

export default {
  name: "App",
  components: {
    MethodsComponent,
    VModel,
    ComputedComponent,
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
