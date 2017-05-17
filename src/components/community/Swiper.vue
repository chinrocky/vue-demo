<template>
  <div class="g-community-circle">
    <h2 class="am-subtitle">圈子推荐</h2>
    <div class="m-slidesGrid g-banner">
      <div class="slides">
        <div class="swiper-wrapper">
          <router-link v-for="value in listData" :to="'/community/category/'+value.id" class="swiper-slide">
            <img :src="value.ico" alt="banner">
            <div>
              <h3>{{value.name}}</h3> <i></i> <p>今日 : {{value.todayIssued}}</p>
            </div>
          </router-link>
        </div>
      </div>
      <router-link to="/community/category" class="more">查看更多<span class="icon-right"></span></router-link>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data(){
    return {
      listData: []
    }
  },
  methods: {
    fetchData(){
      var _this = this;
      this.$http.get('/data/community_category.data').then(function(res){
        _this.listData = res.data;
      }).catch(function(err) {
        //_this.ErrorState = true;
      });
    }
  },
  mounted: function() {
    this.fetchData(); //获取数据
  },
  updated: function(){
    new Swiper('.slides', {
      observer:true,
      observeParents:true,
      slidesPerView: 3.5,
      spaceBetween: 8,
      slidesOffsetAfter:8,
      initialSlide: 0
    });
  }
}
</script>
