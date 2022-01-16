<template>
  <div class="backTop" v-show="backTopIsShow">
      <img src="~assets/img/BackTop/backTop.svg" alt="">
  </div>
</template>
<script>
export default {
  props: {
    backTopIsShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="css" scoped>
  .backTop{
    position: fixed;
    bottom: 90px;
    right: 30px;
    z-index: 10000000;
  }
  .backTop img{
    width:30px;
    height: 30px;
  }
</style>
