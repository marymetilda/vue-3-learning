<template>
  <h4>App component text</h4>
  <ChildStyles />
  <TestSection>
    <h4>Test section</h4>
  </TestSection>
</template>

<script>
import ChildStyles from "./components/ChildStyles.vue";
import TestSection from "./components/TestSection.vue";

export default {
  name: "App",
  components: {
    ChildStyles,
    TestSection
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

h4{
    color: blueviolet;
}
</style>
