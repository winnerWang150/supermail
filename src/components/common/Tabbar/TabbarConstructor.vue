<template>
  <div>
    <Tabbar>
      <TabbarItem to='/home' fontColor='#d81e06'>
        <img slot="icon" class="tabbar-container-item-img" src="~assets/img/Tabbar/index-deactive.svg" alt="">
        <img slot="icon-active" class="tabbar-container-item-img" src="~assets/img/Tabbar/index-active.svg" alt="">
        <div slot="font">首页</div>
      </TabbarItem>
      <TabbarItem to='/catagory' fontColor='#d81e06'>
        <img slot="icon" class="tabbar-container-item-img" src="~assets/img/Tabbar/application-deactive.svg" alt="">
        <img slot="icon-active" class="tabbar-container-item-img" src="~assets/img/Tabbar/application-active.svg" alt="">
        <div slot="font">分类</div>
      </TabbarItem>
      <TabbarItem to='/cart' fontColor='#d81e06'>
        <img slot="icon" class="tabbar-container-item-img" src="~assets/img/Tabbar/cart-deactive.svg" alt="">
        <img slot="icon-active" class="tabbar-container-item-img" src="~assets/img/Tabbar/cart-active.svg" alt="">
        <div slot="font">购物车</div>
      </TabbarItem>
      <TabbarItem to='/profile' fontColor='#d81e06'>
        <img slot="icon" class="tabbar-container-item-img" src="~assets/img/Tabbar/profile-deactive.svg" alt="">
        <img slot="icon-active" class="tabbar-container-item-img" src="~assets/img/Tabbar/profile-active.svg" alt="">
        <div slot="font">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from 'components/common/Tabbar/Tabbar.vue'
import TabbarItem from 'components/common/Tabbar/TabbarItem/TabbarItem.vue'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style lang="css">

</style>
