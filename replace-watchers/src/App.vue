<template>
  <WatchComponent />
</template>

<script>
import WatchComponent from "./components/WatchComponent";
export default {
  name: "App",
  components: {
    WatchComponent,
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
