<template>
  <div class="recommond">
    <div class="recommonditem" v-for="(item, index) of dataList" :key="index">
      <a :href="item.link" class="clearATag">
        <div :href="item.link">
          <img :src="item.image" alt="">
        </div>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="css">
  .recommond {
    display: flex;
    border-bottom:10px solid #eee;
  }
  .recommonditem {
    flex: 1;
    text-align: center;
    padding-bottom:30px;
    padding-top: 5px;
  }
  .recommonditem img{
    width: 50px;
  }
</style>
