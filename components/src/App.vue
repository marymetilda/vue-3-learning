<template>
  <!-- <GreetHello name="Bruce" heroName="batman" />
  <GreetHello name="Clark" heroName="superman" />
  <GreetHello name="Diana" heroName="wonder woman" />
  <GreetHello :name="name" :heroName="description" /> -->
  <article-compornet id="my-article" title="Article Title" :likes="50" :isPublished="true" />
</template>

<script>
// import GreetHello from "./components/GreetHello.vue";
import ArticleCompornet from "./components/ArticleComponent.vue";

export default {
  name: "App",
  components: {
    // GreetHello,
    ArticleCompornet,
  },
  data() {
    return {
      name: "Sample Name",
      description: "Sample Description",
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
