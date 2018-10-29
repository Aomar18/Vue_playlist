<template>
  <ul>
    <li v-for="ninja in ninjas">{{ninja}}</li>
  </ul>
</template>

<script>

export default {
  name: 'ninjas',
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "luigi"]
    };
  }
};
</script>

<style>
html {
  background-color: darkgray;
}
</style>