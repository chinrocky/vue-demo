<template>
  <div class="g-community">
    <ul class="m-community-list">
      <li v-for="value in listData">
        <router-link :to="'category/'+value.category+'/'+value.id" v-if="value.pic.length>3">
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
        <router-link :to="'category/'+value.category+'/'+value.id" v-else>
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
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  data(){
    return {
      listData: []
    }
  },
  methods: {
    fetchData(){
      var _this = this;
      this.$http.get("/data/community_list_data/Recommend.data").then(function(res){
        _this.listData = res.data;
      }).catch(function(err) {
        //_this.ErrorState = true;
      });
    }
  },
  mounted: function() {
    this.fetchData(); //获取数据
  }
}
</script>
