<template>
  <div class="g-community">
    <ul class="m-community-list">
      <li v-for="value in listData">
        <router-link :to="category+'/'+value.id" v-if="value.pic.length>3">
          <div class="head">
            <img :src="value.portrait" :alt="value.name" class="portrait">
            <span class="name">{{value.name}}</span>
          </div>
          <h3 class="am-text-truncate">{{value.title}}</h3>
          <p class="line-clamp-3">{{value.note}}</p>
          <div class="picList">
            <div v-for="(pic, index) in value.pic" v-if="index<3"><img :src="pic" :alt="value.name"></div>
          </div>
          <div class="foot">
            <span class="Speak"><i class="icon-comment"></i>{{value.evaluates}}</span>
            <span class="Speak"><i class="icon-appreciate"></i>{{value.praise}}</span>
            <span class="time"><i class="icon-time"></i>{{value.time}}</span>
          </div>
        </router-link>
        <router-link :to="category+'/'+value.id" v-else>
          <div class="head">
            <img :src="value.portrait" :alt="value.name" class="portrait">
            <span class="name">{{value.name}}</span>
          </div>
          <div class="content">
            <div class="text">
              <h3 class="line-clamp-2">{{value.title}}</h3>
              <p class="line-clamp-3">{{value.note}}</p>
            </div>
            <div class="pic">
              <img :src="value.pic[0]" alt="value.name">
            </div>
          </div>
          <div class="foot">
            <span class="Speak"><i class="icon-comment"></i>{{value.evaluates}}</span>
            <span class="Speak"><i class="icon-appreciate"></i>{{value.praise}}</span>
            <span class="time"><i class="icon-time"></i>{{value.time}}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <NoData v-if="NoDataState"></NoData>
    <Error v-if="ErrorState"></Error>
    <Loading v-if="LoadingState"></Loading>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
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
    category(){
      return this.$route.params.category;
    }
  },
  methods: {
    ...mapActions({
      setListTitle: 'setListTitle'
    }),
    fetchData(){
      if (!this.$route.params.category) { return false; }
      var _this = this;
      this.$http.get("/data/community_list_data/"+this.$route.params.category+".data").then(function(res){
        _this.$store.dispatch('setListTitle', res.data.name);
        _this.listData = res.data.list;
        _this.LoadingState = false;
        if (_this.listData.length == 0) {
          _this.NoDataState = true;
        }
      }).catch(function(err) {
        _this.LoadingState = false;
        _this.NoDataState = false;
        _this.ErrorState = true;
        _this.$store.dispatch('setListTitle', 'sorry,数据丢失');
        //_this.ErrorState = true;
      });
    }
  },
  mounted: function() {
    this.fetchData(); //获取数据
  },
  activated(){  // 获取数据激活状态
    this.NoDataState = false;
    this.ErrorState = false;
    this.LoadingState = true;
    this.fetchData();
  }
}
</script>
