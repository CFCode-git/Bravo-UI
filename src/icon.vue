<template>
  <svg class="b-icon">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>

<script>
  import './svg.js'

  export default {
    name:'bravoIcon',
    props: ['name']
  }
</script>

<style scoped lang="scss">
  .b-icon {
    width: 1em;
    height: 1em;
  }
</style>