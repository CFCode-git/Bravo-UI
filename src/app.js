import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import Plugin from './plugin.js'

Vue.component('b-button', Button)
Vue.component('b-icon', Icon)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-input', Input)
Vue.component('b-row', Row)
Vue.component('b-col', Col)
Vue.component('b-layout', Layout)
Vue.component('b-header', Header)
Vue.component('b-content', Content)
Vue.component('b-footer', Footer)
Vue.component('b-sider', Sider)
Vue.component('b-toast', Toast)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('你的智商需要充值', {
        enableHtml:false,
        position,
        closeButton:{
          text:'已充值',
          callback(){
            console.log('他说已经充值智商了')
          }
        },
        autoClose:false,
        autoCloseDelay: 3
      })
    }
  }
})
