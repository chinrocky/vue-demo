<template>
  <div id="menu">
    <BannerView></BannerView>
    <div class="g-community">
      <ul class="m-community-list m-meun-list">
        <li v-for="value in listData"><router-link :to="'newest/'+value.id">
          <div class="content">
            <div class="pic">
              <img :src="value.pic" :alt="value.title">
            </div>
            <div class="text">
              <h3 class="am-text-truncate">{{value.title}}</h3>
              <p class="line-clamp-3">{{value.note}}</p>
            </div>
          </div>
          <div class="foot">
            <span class="Speak"><i class="icon-comment"></i>{{value.evaluates}}</span>
            <span class="Speak"><i class="icon-appreciate"></i>{{value.praise}}</span>
            <span class="time">发布者：{{value.name}}</span>
          </div>
        </router-link></li>
      </ul>
    </div>
    <NoData v-if="NoDataState"></NoData>
    <Error v-if="ErrorState"></Error>
    <Loading v-if="LoadingState"></Loading>
  </div>
</template>

<script>
import BannerView from '../Banner.vue'
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
  computed: {
    ParentId(){
      return this.$route.params.listname;
    }
  },
  components :{
    BannerView
  },
  methods:{
    fetchData(){
      var _this = this;
      this.$http.get('/data/menu_list_data/Newest.data').then(function(res){
        _this.listData = res.data;
        _this.LoadingState = false;
        if (_this.listData.length == 0) {
          _this.NoDataState = true;
        }
      }).catch(function(err) {
        _this.LoadingState = false;
        _this.NoDataState = false;
        _this.ErrorState = true;
      });
    }
  },
  mounted(){
    this.fetchData(); //获取数据
  }/*,
  activated(){
    this.NoDataState = false;
    this.ErrorState = false;
    this.LoadingState = true;
    this.fetchData(); //获取数据
  },*/
}
</script>
