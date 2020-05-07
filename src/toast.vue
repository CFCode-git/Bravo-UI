<template>
  <div class="toast">
    <slot></slot>
    <div class="line" v-if="closeButton"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default{
    name:'bToast',
    props:{
      autoClose:{
        type: Boolean,
        default: true
      },
      autoCloseDelay:{
        type:Number,
        default: 5
      },
      closeButton:{
        type:Object,
        default:()=>{
          return{
            text:'关闭',callback:(toast)=>{toast.close}
          }
        }
      }
    },
    mounted(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay * 1000)
      }
    },
    methods:{
      close(){
        this.$el.remove()
        this.$destroy()
      },
      onClickClose(){
        this.close()
        this.closeButton.callback()
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size:14px;
  $toast-height:40px;
  $toast-bg:rgba(0,0,0,.75);
  .toast{
    position: fixed; top:0; left:50%; transform:translateX(-50%);
    font-size:$font-size; line-height: 1.8; height:$toast-height;
    display: flex; align-items: center;
    background: $toast-bg;
    color:white;
    border-radius: 4px;
    box-shadow:0 0 3px 0 rgba(0,0,0,.5);
    padding:0 16px;
  }
  .close{
    padding-left: 16px;

  }
  .line{
    height:100%;
    border-left:2px solid #666;
    margin-left: 16px;
  }
</style>