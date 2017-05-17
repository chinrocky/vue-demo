<template>
  <div class="g-shop-list">
    <div class="m-shop-list">
      <ul>
        <li v-for="(value,index) in listData"><router-link :to="'shop/'+value.category+'/'+value.listname+'/'+value.id">
          <img :src="value.pic[0]" :alt="value.name">
          <h3 class="line-clamp-2">{{value.name}}</h3>
          <p>￥{{value.price}}</p>
          <span>月销{{value.purchased}}件</span>
        </router-link></li>
      </ul>
    </div>
    <NoData v-if="NoDataState"></NoData>
    <Error v-if="ErrorState"></Error>
    <Loading v-if="LoadingState"></Loading>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default{
  data(){
    return {
      listData: [],
      NoDataState: false,
      ErrorState: false,
      LoadingState: true,
    }
  },
  methods:{
    fetchData(){
      var _this = this;
      this.$http.get('/data/shop_recommend.data').then(function(res){
        _this.listData = res.data;
        _this.LoadingState = false;
      }).catch(function(err) {
        _this.LoadingState = false;
        _this.NoDataState = false;
        _this.ErrorState = true;
      });
    }
  },
  mounted: function() {
    this.fetchData(); //获取数据
  }
}
</script>
