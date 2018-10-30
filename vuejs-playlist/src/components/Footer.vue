<template>
    <footer>

        <p>{{ copyright }}</p>
        
    </footer>
</template>


<script>
export default {
  data() {
    return {
      copyright: "Copyright 2017 Vue Ninjas"
    };
  }
};
</script>






<style scoped>
footer {
  background-color: red;
  padding: 6px;
}

p {
  color: blue;
  padding: 6px;
}
</style>



