<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted(){
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`b-button-group只接受b-button作为子元素，而你使用了${name}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.b-button-group{
  display: inline-flex;
   vertical-align: middle;
  >.b-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>