import Vue from 'vue'
import App from './App.vue'
import Ninjas from './components/Ninjas.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.component('ninjas'. Ninjas);



new Vue({
  
  el: '#app',
  data: {
    ninjas: [],
    input: '',
  },
  methods: {
    addNinja() {
      this.ninjas.push(this.input);
      this.input = "";
      console.log('added new task to end of list ')
    },
  },
  render: h => h(App)

  
})
