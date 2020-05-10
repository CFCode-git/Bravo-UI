<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'bTabsBody',
    inject:['eventBus']
  }
</script>

<style>
  .tabs-body{

  }
</style>