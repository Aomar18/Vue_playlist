<template>
<div>

  <h1> List of Ninjas: </h1>
  <ul>
    <li v-for="ninja in ninjas" @click="ninja.show=!ninja.show">
      <h2>{{ninja.name}}</h2>
      <h3 v-show="ninja.show">{{ninja.speciality}}</h3>

    </li>
  </ul>
  </div>
</template>




<script>
export default {
  name: "ninjas",
  data() {
    return {
      ninjas: [
              {name: 'Ryu', speciality: 'Shadow movement', show: false},
              {name: 'Crystal', speciality: 'Ice powers', show: false},
              {name: 'Hitoshi', speciality: 'Clones', show: false},
              {name: 'Tango', speciality: 'Making smoothies', show: false},
              {name: 'Kami', speciality: 'Stretch Limbs', show: false},
              {name: 'Yoshi', speciality: 'Flying', show: false}
      ],
    }
  },
};
</script>






<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
ul {
  list-style-type: none;
}
</style>