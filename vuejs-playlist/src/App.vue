<template>
<div>

<app-header></app-header>

<ninjas></ninjas>

<app-footer></app-footer>
  
</div>
</template>




<script>

import Header from './components/Header.vue'
import Ninjas from './components/Ninjas.vue'
import Footer from './components/Footer.vue';

export default {
  components: { 
    ninjas: Ninjas,
    'app-header':Header,
    'app-footer':Footer,
  }
};
</script>





<style >
html {
  background-color: darkgray;
  text-align: center;
  margin: 0%;
  margin-top: 0;
  padding-left: 0;
  padding-right: 0;
  display: inline-block;
}
</style>
