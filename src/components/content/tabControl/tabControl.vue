<template>
  <div>
    <div class='tabcontrol'>
      <div class="tabcontrol-item" v-for="(item, index) of tabList" :key="index">
        <span :class="{'tabcontrol-item-span':index == currentIndex}" @click="changetab(index)">
          {{item}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changetab (index) {
      this.currentIndex = index
      this.$emit('changeTabControlList', index)
    }
  }
}
</script>
<style lang="css">
  .tabcontrol{
    display: flex;
    height: 30px;
    background: #fff;
    line-height: 30px;
  }
  .tabcontrol-item{
    flex: 1;
    text-align: center;
  }
  .tabcontrol-item>span{
    padding:5px;
    /* border-bottom: 2px solid var(--color-tint); */
  }
  .tabcontrol-item-span{
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);
  }
</style>
