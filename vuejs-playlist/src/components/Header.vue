<template>

<header>

<h1>{{title}}</h1>

</header>

</template>


<script>
export default {
  data() {
    return {
      title: "Vue Ninjas"
    };
  }
};
</script>

<style scoped>

html {
  margin: 0;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  margin: 0%;
  margin-top: 0;
  padding-left: 0;
  padding-right: 0;
  display: inline-block;
}

header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>



