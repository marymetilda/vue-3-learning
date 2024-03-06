<template>
  <CardComponent>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" alt="sample" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </CardComponent>
  <NameList>
    <template v-slot:default="slotProps"
      >{{ slotProps.firstName }} {{ slotProps.lastName }}</template
    >
  </NameList>
  <NameList>
    <template v-slot:default="slotProps"
      >{{ slotProps.lastName }} {{ slotProps.firstName }}</template
    >
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">{{ slotProps.firstName }}</template>
  </NameList>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import NameList from "./components/NameList.vue";

export default {
  name: "App",
  components: {
    CardComponent,
    NameList,
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
