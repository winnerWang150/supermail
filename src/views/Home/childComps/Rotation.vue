<template>
  <div>
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(banner, index) in imgList" :key="index">
        <img :height="picHeight" width="100%" v-lazy="banner.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload)
export default {
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    picHeight: {
      type: Number,
      default: 150
    },
    imgList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="">

</style>
