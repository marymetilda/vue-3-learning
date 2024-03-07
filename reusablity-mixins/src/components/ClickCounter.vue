<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixins from "../mixins/counter";

export default {
  name: "ClickCounter",
  mixins: [CounterMixins],
};
</script>

<style scoped></style>
