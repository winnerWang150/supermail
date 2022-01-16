<template>
  <div class="home">
      <navbar class="navbar-home">
        <span class="navbar-home-span" slot="middle">购物街</span>
      </navbar>
      <wrapper ref="wrapper">
        <rotation class="rotation" :autoplay='5000' :picHeight='150' :imgList="bannerList" />
        <recommond :dataList="recommondList" />
        <feature/>
        <tabcontrol :tabList="['流行','新款','精选']" @changeTabControlList='getTabControlList' class="Tabcontrol"></tabcontrol>
        <goodsList :goodsList="goods[changeGoodsCata].list"></goodsList>
      </wrapper>
      <backtop @click.native="BackTop"/>
  </div>
</template>
<script>
import navbar from 'components/content/navbar/navbar'
import { getHomeData, getGoodsData } from 'network/home'
import rotation from 'views/Home/childComps/Rotation'
import recommond from 'views/Home/childComps/recommond'
import feature from 'views/Home/childComps/feature'
import tabcontrol from 'components/content/tabControl/tabControl'
import goodsList from 'components/content/goods/goodsList'
import wrapper from 'components/common/BScroll/BScroll'
import backtop from 'components/content/BackTop/BackTop'
export default {
  components: {
    rotation,
    navbar,
    recommond,
    feature,
    tabcontrol,
    goodsList,
    wrapper,
    backtop
  },
  data () {
    return {
      bannerList: null,
      recommondList: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      changeGoodsCata: 'pop'
    }
  },
  created () {
    this.getHomeData()
    // 请求pop
    this.getGoodsList('pop')
    // 请求new
    this.getGoodsList('new')
    // 请求sell
    this.getGoodsList('sell')
  },
  methods: {
    getHomeData () {
      getHomeData().then(res => {
        console.log(res)
        this.bannerList = res.data.banner.list
        this.recommondList = res.data.recommend.list
      })
    },
    getGoodsList (type) {
      this.goods[type].page += 1
      getGoodsData(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
    },
    getTabControlList (index) {
      console.log(index)
      switch (index) {
        case 0:
          this.changeGoodsCata = 'pop'
          break
        case 1:
          this.changeGoodsCata = 'new'
          break
        case 2:
          this.changeGoodsCata = 'sell'
          break
        default:
          break
      }
    },
    BackTop () {
      this.$refs.wrapper.backTop()
    }
  }
}
</script>
<style scoped>
  .navbar-home{
    background-color: var(--color-tint);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100000;
  }
  .navbar-home-span{
    color:white;
  }
  .rotation{
  }
  .Tabcontrol{
    z-index: 90000;
    position: sticky;
    top:41px;
  }
  .home{
    margin-top:41px;
    height: 100vh;
  }
</style>
