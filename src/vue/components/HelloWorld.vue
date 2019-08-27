<template>
  <h2 class="hello">{{msg}}</h2>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: 'WoWoWo!'
    }
  }
};
</script>

<style>
.hello {
  text-align: center;
}
</style>

