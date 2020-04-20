<template>
  <svg class="b-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    props:['name']
  }
</script>

<style scoped lang="scss">
  .b-icon {
    width: 1em;
    height: 1em;
  }
</style>