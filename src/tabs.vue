<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'bTabs',
    props:{
      selected:{
        type:String,
        required:true
      },
      direction:{
        type:Number,
        default:'horizontal',
        validator(value){
          return['horizontal','vertical'].indexOf(value)>=0
        }
      }
    },
    created(){
      // this.$emit('update:selected','xxx')
    }
  }
</script>

<style>
  .tabs{

  }
</style>