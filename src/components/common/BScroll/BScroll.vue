<template>
  <div ref="wrapper" class="wrapper">
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      BScroll: null
    }
  },
  methods: {
    backTop () {
      this.BScroll.scrollTo(0, 0, 300)
    }
  },
  mounted () {
    this.BScroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true
    })
    this.BScroll.on('pullingUp', () => {
      setTimeout(() => {
        this.BScroll.finishPullUp()
      }, 2000)
      this.BScroll.refresh()
    })
  }
}
</script>
<style scoped>
  .wrapper{
    height: calc(100% - 90px);
    overflow: hidden;
  }
</style>
