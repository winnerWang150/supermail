<template>
  <div class="nav-bar">
    <div class="left"><slot name='left'></slot></div>
    <div class="middle"><slot name='middle'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="css">
  .nav-bar{
    position: relative;
    top: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    height: 41px;
    line-height: 41px;
  }
  .middle{
    text-align: center;
    flex: 1;
  }
  .left{
    width: 50px;
  }
  .right{
    width: 50px;
  }
</style>
