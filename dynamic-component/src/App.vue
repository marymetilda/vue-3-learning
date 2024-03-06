<template>
  <div>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>
  </div>

  <KeepAlive>
    <component :is="activeTab" />
  </KeepAlive>
</template>

<script>
import TabA from "./components/TabA";
import TabB from "./components/TabB";
import TabC from "./components/TabC";

export default {
  name: "App",
  data() {
    return {
      activeTab: "TabA",
    };
  },
  components: {
    TabA,
    TabB,
    TabC,
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
