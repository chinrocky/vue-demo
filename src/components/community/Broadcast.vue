<template>
  <div class="g-shop-list">
    <div class="m-shop-list">
      <ul>
        <li v-for="value in listData"><router-link :to="'broadcast/'+value.id">
          <img :src="value.pic" :alt="value.name">
          <h3 class="am-text-truncate">{{value.name}}</h3>
        </router-link></li>
      </ul>
    </div>
    <NoData v-if="NoDataState"></NoData>
    <Error v-if="ErrorState"></Error>
    <Loading v-if="LoadingState"></Loading>
  </div>
</template>

<script>
export default{
  data(){
    return {
      listData: [],
      NoDataState: false,
      ErrorState: false,
      LoadingState: true,
    }
  },
  methods: {
    fetchData(){
      var _this = this;
      this.$http.get("/data/broadcast.data").then(function(res){
        _this.listData = res.data;
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
  activated(){  // 获取数据激活状态
    this.NoDataState = false;
    this.ErrorState = false;
    this.LoadingState = true;
    this.fetchData();
  }
}
</script>
