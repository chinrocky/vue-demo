<template>
  <div id="home">
    <HomeNavView></HomeNavView>
    <BannerView></BannerView>
    <MenuSwiperView></MenuSwiperView>
    <ShopListView></ShopListView>
  </div>
</template>

<script>
import HomeNavView from './HomeNav.vue'
import BannerView from './Banner.vue'
import MenuSwiperView from './MenuSwiper.vue'
import ShopListView from './ShopList.vue'

export default {
  components :{
    HomeNavView,
    BannerView,
    MenuSwiperView,
    ShopListView
  }
}
</script>
