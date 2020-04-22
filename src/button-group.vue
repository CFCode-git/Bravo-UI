<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.b-button-group{
  display: inline-flex;
   vertical-align: middle;
  >.b-button{
    border-radius: 0;
    margin-left: -1px;
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