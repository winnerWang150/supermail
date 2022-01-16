<template>
  <div class="goodsItem">
    <div @click="clientUrl(goodsItem.clientUrl)">
      <img :src="goodsItem.show.img" alt="">
    </div>
    <div class="title">{{goodsItem.title}}</div>
    <div class="discription">
      <span class="price">{{goodsItem.price}}</span>
      <span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    clientUrl (url) {
      window.open(url, '_self')
    }
  }
}
</script>
<style lang="css">
  .goodsItem {
    width: 48%;
    font-size: var(--font-size);
  }
  .goodsItem img{
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }
  .title{
    margin-top: 5px;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .discription{
    text-align: center;
    margin-bottom: 5px;
  }
  .price{
    color: var(--color-tint);
    margin-right: 20px;
  }
  .collection{
    position: relative;
  }
  .collection::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/goods/collect.svg') 0 0/14px 14px;
  }
</style>
