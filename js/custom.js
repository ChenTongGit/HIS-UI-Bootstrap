$(document).ready(function(){


  $(".submenu > a").click(function(e) {
    e.preventDefault();
    var $li = $(this).parent("li");
    var $ul = $(this).next("ul");

    if($li.hasClass("open")) {
      $ul.slideUp(350);
      $li.removeClass("open");
    } else {
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      $ul.slideDown(350);
      $li.addClass("open");
    }
  });

});

<!--	  封装以对象形式输出json-->
$.fn.serializeObject = function () {
  //当前数据
  var ct = this.serializeArray();
  var obj = {};
  $.each(ct,function () {
    if(obj[this.name]!== undefined){
      if(!obj[this.name].push){
        obj[this.name] = [obj[this.name]];
      }
      obj[this.name].push(this.value || "");
    }else {
      obj[this.name] = this.value || "";
    }
  });
  return obj;
}
