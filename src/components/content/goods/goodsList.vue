<template>
  <div class="goodsList">
    <goodsListItem :goodsItem="goodItem" v-for="(goodItem, index) of goodsList" :key="index"/>
  </div>
</template>
<script>
import goodsListItem from '@/components/content/goods/goodsListItem'
export default {
  components: {
    goodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="css">
  .goodsList {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
