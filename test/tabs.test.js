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

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected',(done)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
     <b-tabs selected="finance">
        <b-tabs-head>
          <b-tabs-item name="woman"> 美女 </b-tabs-item>
          <b-tabs-item name="finance">财经</b-tabs-item>
          <b-tabs-item name="sports">体育</b-tabs-item>
        </b-tabs-head>
        <b-tabs-body>
          <b-tabs-panel name="woman">美女相关资讯</b-tabs-panel>
        <b-tabs-panel name="finance">财经相关资讯</b-tabs-panel>
        <b-tabs-panel name="sports">体育相关资讯</b-tabs-panel>
      </b-tabs-body>
    </b-tabs>
    `
    let vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('接受 direction prop',()=>{

  })
})
