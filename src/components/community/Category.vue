<template>
  <div id="CommunityCategory">
    <div class="g-Commouity">
      <div class="m-myDefault">
        <i class="icon-no_data"></i>
        <p>尚未关注圈子,马上关注吧！</p>
      </div>
    </div>

    <div class="g-community-circle">
      <h2 class="am-subtitle">推荐圈子</h2>
      <div class="m-community-class">
        <ul>
          <li v-for="value in listData" :style="'background-image: url('+value.pic+')'"><router-link :to="'/community/category/'+value.id">
            <div><span class=""><i class="icon-comment"></i>{{value.issued}}</span>
            <span class=""><i class="icon-appreciate"></i>{{value.praise}}</span></div>
            <h3>{{value.name}}</h3>
            <p>{{value.note}}</p>
          </router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
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
  }
}
</script>
