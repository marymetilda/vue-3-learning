<template>
  <DataComponent />
  <DemoOne />
  <DemoTwo />
</template>

<script>
import DataComponent from "./components/DataComponent";
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo";

export default {
  name: "App",
  components: {
    DataComponent,
    DemoOne,
    DemoTwo,
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
