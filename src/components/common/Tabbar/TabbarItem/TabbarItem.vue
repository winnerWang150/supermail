<template>
  <div class="tabbar-container-item">
    <div @click="changeMenu">
      <div v-if='!actived' >
        <slot name = 'icon'></slot>
      </div>
      <div v-else>
        <slot name = 'icon-active'></slot>
      </div>
    </div>
    <div :style="getcolor">
      <slot name = 'font'></slot>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    to: {
      type: String
    },
    fontColor: {
      type: String,
      default: '#d81e06'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    changeMenu () {
      this.$router.push(this.to)
    }
  },
  computed: {
    actived () {
      return this.to.indexOf(this.$route.path) !== -1
    },
    getcolor () {
      return this.actived ? { color: this.fontColor } : {}
    }
  }
}
</script>
<style lang="css">
  .tabbar-container-item{
    flex: 1;
    text-align: center;
  }
 .tabbar-container-item-img{
    margin-top: 3px;
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
</style>
