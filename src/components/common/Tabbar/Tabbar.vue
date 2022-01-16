<template>
  <div class="tabbar-container">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="css">
  .tabbar-container {
    background: #f6f6f6;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 49px;
    display: flex;
  }
</style>
