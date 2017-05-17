<template>
  <div class="g-shop-list">
    <div class="m-shop-list">
      <ul>
        <li v-for="(value,index) in listData"><router-link :to="ParentId+'/'+value.id">
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
  computed: {
    ParentId(){
      return this.$route.params.listname;
    }
  },
  methods:{
    ...mapActions({
      setListTitle: 'setListTitle'
    }),
    fetchData(){
      var _this = this;
      this.$http.get('/data/shop_list_data/'+this.$route.params.listname+'.data').then(function(res){
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
      this.$http.get('/data/shop_category.data').then(function(res){
        var Category = res.data[_this.$route.params.category].SubCategory
        for(var i=0; i<Category.length; i++){
          if(Category[i].id === _this.$route.params.listname){
            _this.$store.dispatch('setListTitle', Category[i].name);
          }
        }
      }).catch(function(err) {
        _this.$store.dispatch('setListTitle', '商城列表页');
      })
    }
  },
  activated(){
    this.NoDataState = false;
    this.ErrorState = false;
    this.LoadingState = true;
    this.fetchData(); //获取数据
  },
}
</script>
