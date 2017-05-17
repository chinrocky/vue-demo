<template>
  <div>
    <div id="mMsgHeader" class="m-msg-header">
      <a class="ico-left icon-back" @click="routerBack"></a>
      <a class="ico-right icon-more" href="javascript:void(0)"></a>
      <h1 class="am-text-truncate">{{communityContent.title}}</h1>
    </div>
    <div class="g-banner"><img src="http://images.zjlsp.cn/home_banner_1.jpg" alt=""></div>
    <div class="m-community-content">
      <div class="head">
        <img :src="communityContent.portrait" :alt="communityContent.name" class="portrait">
        <span class="name">{{communityContent.name}}</span>
        <a class="time"><i class="icon-time"></i>{{communityContent.time}}</a>
      </div>
      <h2>{{communityContent.title}}</h2>
      <div v-html="communityContent.content"></div>
    </div>
  </div>
</template>

<script>
export default{
  name: "community_contents",
  data(){
    return {
      communityContent: []
    }
  },
  methods: {
    routerBack(){
      this.$router.go(-1);
    },
    fetchData(){
      var _this = this;
      var contentId = this.$route.params.id;
      this.$http.get("/data/community_list_data/"+this.$route.params.category+".data").then(function(res){
        var data = res.data.list;
        for(var i=0; i<data.length; i++){
          if(data[i].id === contentId){
             _this.communityContent = data[i];
          }
        }
      }).catch(function(err) {
        console.log(err);
        //_this.ErrorState = true;
      });
    }
  },
  mounted: function() {
    this.fetchData(); //获取数据
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
