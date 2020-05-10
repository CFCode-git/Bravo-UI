const expect = chai.expect;
import Vue from 'vue'
import {describe, it} from 'mocha'
import Tabs from '../src/tabs'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-head'
import TabsPanel from '../src/tabs-panel'
Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-panel', TabsPanel)


describe('TabsItem',()=>{

  it('存在.',()=>{
    expect(TabsItem).to.exist
  })

  it('接受 name',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData:{
        name:'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  it('接受 disabled',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData:{
        disabled:true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})