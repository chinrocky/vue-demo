<template>
  <div class="g-shop-similar">
    <div class="head">
      <h2>热门菜谱</h2>
      <router-link to="/menu/recommend" class="more">查看更多<i class="icon-right"></i></router-link>
    </div>
    <div class="m-slidesGrid">
      <div class="slides">
        <div class="swiper-wrapper">
          <router-link v-for="value in listData" :to="'/menu/recommend/'+value.id" class="swiper-slide">
            <img :src="value.pic" alt="banner">
            <h3 class="am-text-truncate">{{value.title}}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data(){
    return {
      listData: [],
    }
  },
  methods:{
    fetchData(){
      var _this = this;
      this.$http.get('/data/menu_list_data/Recommend.data').then(function(res){
        _this.listData = res.data;
        if (_this.listData.length == 0) {
          _this.NoDataState = true;
        }
      }).catch(function(err) {
        console.log(err);
      });
    }
  },
  mounted(){
    this.fetchData(); //获取数据
  },
  updated(){
    new Swiper('.slides', {
      observer:true,
      observeParents:true,
      slidesPerView: 3.5,
      spaceBetween: 8,
      slidesOffsetAfter:8,
    });
  }
}
</script>
