<template>
<div>  
  
  <h1> {{title}} </h1>
  <ninjas></ninjas>
  
  
</div>
</template>
<script>
import Ninjas from './Ninjas.vue'


export default {

  name: 'app',
  data () {
    return
    title: 'Ninja App'
  }
}
</script>

<style></style>
