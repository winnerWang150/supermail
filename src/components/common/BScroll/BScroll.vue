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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
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
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true
    })
    if (this.pullUpLoad === true) {
      this.BScroll.on('pullingUp', () => {
        console.log('上拉加载')
        this.BScroll.finishPullUp()
        this.$emit('pullUpLoad')
      })
    }
    this.BScroll.on('scroll', (pos) => {
      this.$emit('scrollValArr', pos)
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
