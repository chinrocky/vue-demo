<template>
  <div class="commend">
    <BannerView></BannerView>
    <SwiperView></SwiperView>
    <RecommendList></RecommendList>
  </div>
</template>

<script>
import SwiperView from './Swiper.vue'
import BannerView from '../Banner.vue'
import RecommendList from './RecommendList.vue'

export default {
  components :{
    BannerView,
    SwiperView,
    RecommendList
  },
  data(){
    return {
      CardListUrl: "/data/community_list_data/Recommend.data"
    }
  }
}
</script>
