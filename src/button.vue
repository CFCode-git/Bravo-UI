<template>
  <button class="b-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
    <b-icon class="icon" v-if="icon && !loading" :name="icon"></b-icon>
    <b-icon class="loading icon" v-if="loading" name="loading"></b-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from './icon.vue';
  export default {
    name:'bravoButton',
    components:{
      'b-icon':Icon
    },
    props: {
      icon: {},
      loading:{
        type:Boolean,
        default:false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right')
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .b-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle; /*解决内联元素不对齐*/

    &:hover {
      border-color: var(--border-color-hover)
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .1em;
    }

    > .content {
      order: 2
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }

      > .content {
        order: 1;
      }
    }
    .loading{
      animation:spin 1.5s infinite linear;
    }
  }
</style>