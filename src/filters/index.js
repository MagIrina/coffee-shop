import Vue from 'vue'


Vue.filter('addCarrency', (value) => {
  return value + '$'
})