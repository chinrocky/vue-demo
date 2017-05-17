<template>
  <div>
    <div id="mMsgHeader" class="m-msg-header">
      <a class="ico-left icon-back" onclick="window.history.go(-1)"></a>
      <a class="ico-right icon-more" href="javascript:void(0)"></a>
      <h1 class="am-text-truncate">{{shopContentShop.name}}</h1>
    </div>

    <!--头部产品滑动-->
    <div class="g-banner" id="productSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="value in shopContentShop.pic">
          <img :src="value" alt="banner">
        </div>
      </div>
    </div>

    <div class="g-shop-content">

      <!-- 产品基本参数 -->
      <div class="g-shop-head">
        <div class="m-shop-head">
          <h1>{{shopContentShop.name}}</h1>
          <p>￥{{shopContentShop.price}}<s>￥{{shopContentShop.price}}</s></p>
          <div class="note">
            <span>快递：包邮</span>
            <span>{{shopContentShop.purchased}}个人已经购买</span>
            <span>{{shopContentShop.address}}</span>
          </div>
        </div>
      </div>

      <RecommendSwiper></RecommendSwiper>

      <div class="g-navbar">
       <div class="m-navbar">
         <ul>
           <li><a href="javascript:void(0)" :class="{'router-link-active':contentClass}" @click="setShowTemplate('content')">详情</a></li>
           <li><a href="javascript:void(0)" :class="{'router-link-active':evaluateClass}" @click="setShowTemplate('evaluate')">评论(12)</a></li>
           <li><a href="javascript:void(0)" :class="{'router-link-active':recommendClass}" @click="setShowTemplate('recommend')">推荐</a></li>
         </ul>
       </div>
     </div>

     <div class="g-shop-introduce" v-html="shopContentShop.content" v-if="shopTemplate == 'content'"></div>

     <div class="g-community" v-if="shopTemplate == 'evaluate'" >
       <ul class="m-community-list">
         <li v-for="value in shopContentShop.evaluate"><a href="#">
           <div class="head">
             <img :src="value.portrait" alt="头像" class="portrait">
             <span class="name">{{value.userNanme}}</span>
           </div>
           <p>{{value.text}}</p>
           <div class="foot">
             <span class="Speak"><i class="icon-comment"></i>{{value.evaluates}}</span>
             <span class="Speak"><i class="icon-appreciate"></i>{{value.praise}}</span>
             <span class="time"><i class="icon-time"></i>{{value.time}}</span>
           </div>
         </a></li>
       </ul>
     </div>

     <div class="g-shop-list" v-if="shopTemplate == 'recommend'" >
       <div class="m-shop-list">
         <ul>
           <li v-for="(value,index) in listData"><router-link :to="'/shop/'+value.category+'/'+value.listname+'/'+value.id">
             <img :src="value.pic[0]" :alt="value.name">
             <h3 class="line-clamp-2">{{value.name}}</h3>
             <p>￥{{value.price}}</p>
             <span>月销{{value.purchased}}件</span>
           </router-link></li>
         </ul>
       </div>
     </div>

    </div>

    <!-- 购物车底部 -->
    <div id="footer" class="m-shop-footer">
      <ul>
        <li class="shopping-cart" @click="addShoppingCart"><span>加入购物车</span></li>
        <li class="purchase" @click="purchase"><span>立即购买</span></li>
      </ul>
    </div>

    <Error v-if="ErrorState"></Error>
    <Loading v-if="LoadingState"></Loading>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import Swiper from 'swiper'
import RecommendSwiper from './RecommendSwiper.vue'

export default {
  name: "shop_content",
  data(){
    return {
      shopContentShop: [],
      listData: [],
      shopTemplate: 'content',
      contentClass: true,
      evaluateClass: false,
      recommendClass: false,
      ErrorState: false,
      LoadingState: true
    }
  },
  components:{
    RecommendSwiper
  },
  methods: {
    setShowTemplate(name){
      this.shopTemplate = name;
      this.contentClass = this.evaluateClass = this.recommendClass = false;
      if(name == 'content'){
        this.contentClass = true;
      }else if(name == 'evaluate'){
        this.evaluateClass = true;
      }else if(name == 'recommend'){
        this.recommendClass = true;
      }
    },
    addShoppingCart(){
      alert('加入购物车,商品id：'+this.shopContentShop.id);
    },
    // 购买商品
    purchase(){
      alert('立即购买，商品id：'+this.shopContentShop.id+'，商品价格：'+this.shopContentShop.price);
    },
    fetchData(){
      if (!this.$route.params.listname) { return false; }
      var _this = this;
      var contentId = this.$route.params.contentId;
      this.$http.get('/data/shop_list_data/'+this.$route.params.listname+'.data').then(function(res){
        for(var i=0; i<res.data.length; i++){
          if(res.data[i].id === contentId){
             _this.shopContentShop = res.data[i];
             _this.LoadingState = false;
          }
        };
        if (_this.shopContentShop.length === 0) {
          _this.LoadingState = false;
          _this.ErrorState = true;
        }
      }).catch(function(err) {
        _this.LoadingState = false;
        _this.ErrorState = true;
      });
      // 请求推荐产品列表
      this.$http.get('/data/shop_recommend.data').then(function(res){
        _this.listData = res.data;
      }).catch(function(err) {

      });
    }
  },
  mounted() {
    this.ErrorState = false;
    this.LoadingState = true;
    this.fetchData(); //获取数据
    //头部产品主图滑动
    new Swiper('#productSwiper', {
      initialSlide:0,
      observer:true,
      observeParents:true,
    });

    (function(){
      function hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
      }
      function addClass(obj, cls) {
        if (!hasClass(obj, cls)) obj.className += " " + cls;
      }
      function removeClass(obj, cls) {
        if (hasClass(obj, cls)) {
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
          obj.className = obj.className.replace(reg, ' ');
        }
      };
      var oheader = document.getElementById("mMsgHeader");
      window.onscroll = function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t !== 0) {
          addClass(oheader,'active');
        }else{
          removeClass(oheader,'active');
        };
      }
    })();
  }
}

</script>
