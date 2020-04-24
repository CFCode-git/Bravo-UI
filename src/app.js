import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('b-button', Button)
Vue.component('b-icon', Icon)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-input', Input)
Vue.component('b-row', Row)
Vue.component('b-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  methods: {
    inputChange() {
      console.log(1)
    }
  }
})
