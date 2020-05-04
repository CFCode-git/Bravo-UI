<template>
  <div class="row"
       :style="rowStyle"
       :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'bRow',
    props: {
      gutter: {
        type: [Number, String]
      },
      align:{
        type:String,
        validator(value){
          return ['right','left','center'].includes(value)
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {
          marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'
        }
      },
      rowClass(){
        let {align} = this
        return [align && `align-${align}`]
      }
    }
  }
</script>

<style scoped lang="scss">
  .row {
    flex-wrap: wrap;
    display: flex;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>