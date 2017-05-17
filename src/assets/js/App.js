window.onload = function() {
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
};
