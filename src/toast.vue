<template>
  <div class="toast" ref="lineWrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" v-if="closeButton" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'bToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 5
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭', callback: undefined
          }
        }
      },
      enableHtml:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      this.lineStyleUpdate()
      this.execAutoClose()
    },
    methods: {
      execAutoClose(){
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      lineStyleUpdate(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.lineWrapper.getBoundingClientRect().height}px`
        })
      },
      close() {
        this.$el.remove()
        this.$destroy()
      },
      log() {
        console.log('测试')
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  .toast {
    position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
    display: flex; align-items: center;
    background: $toast-bg;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    padding: 0 16px;
    .message{
      padding:8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 2px solid #666;
      margin-left: 16px;
    }
  }


</style>