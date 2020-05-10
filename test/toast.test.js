import {describe, it} from 'mocha'
const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props',function(){
    it('接受 autoClose',(done)=>{
      const Constructor = Vue.extend(Toast)
      const div = document.createElement('div')
      document.body.appendChild(div)
      const vm = new Constructor({
        propsData:{
          autoClose:1,
        }
      }).$mount(div)
      vm.$on('beforeClose',()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
  })

})
