<template>
  <h2>{{ name }}</h2>
  <div>
    <button @click="changeName('batman'), increment(1, $event)">
      Change name
    </button>
  </div>

  <h2>{{ count }}</h2>
  <button @click="increment(1)">Increment 1</button>
  <button @click="decrement(1)">Decrement 1</button>
  <button @click="increment(5)">Increment 5</button>
  <button @click="decrement(5)">Decrement 5</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Sample Name",
      count: 0,
    };
  },
  methods: {
    changeName(name) {
      this.name = name;
    },

    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
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
