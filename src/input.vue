<template>
  <div class="wrapper" :class="{'error':error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <Icon name="error1" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon.vue'

  export default {
    name: 'bravoInput',
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  $error-color: red;
  .wrapper { font-style: $font-size; display: inline-block;display: inline-flex;
    align-items: center;
    >*:not(:last-child){margin-right: .5em;}
    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover { border-color: #666; }

      &:focus { box-shadow: 0 1px 3px $box-shadow-color; outline: none; }

      &[disabled], &[readonly] { border-color: #aaa; color: #aaa; cursor: not-allowed; }
    }

    &.error {
      > input { border-color: $error-color; }

      .icon-error { fill: $error-color; }

      .errorMessage { color: $error-color; }
    }
  }
</style>