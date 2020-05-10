<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:'bTabs',
    props:{
      selected:{
        type:String,
        required:true
      },
      direction:{
        type:String,
        default:'horizontal',
        validator(value){
          return['horizontal','vertical'].indexOf(value)>=0
        }
      }
    },
    data(){
      return{
        eventBus:new Vue()
      }
    },
    provide(){
      return {
        eventBus:this.eventBus
      }
    },
    mounted(){
      if(this.$children.length === 0){
        console && console.warn && console.warn('tabs只接受子组件tabs-head 和 tabs-body')
      }
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'bTabsHead'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name === 'bTabsItem' && childVm.name === this.selected){
              this.eventBus.$emit('update:selected',this.selected,childVm)
            }
          })
        }
      })
    }
  }
</script>

<style>
  .tabs{

  }
</style>