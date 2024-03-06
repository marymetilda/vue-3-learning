<template>
  <Teleport to="#portal-root ">
    <PortalComponent />
  </Teleport>
</template>

<script>
import PortalComponent from "./components/PortalComponent";

export default {
  name: "App",
  components: {
    PortalComponent,
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
