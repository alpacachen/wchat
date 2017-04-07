/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //首字母高度
    var obj = {
      A:$(".toA").offset()?$(".toA").offset().top:0,
      B:$(".toB").offset()?$(".toB").offset().top:0,
      C:$(".toC").offset()?$(".toC").offset().top:0,
      D:$(".toD").offset()?$(".toD").offset().top:0,
      E:$(".toE").offset()?$(".toE").offset().top:0,
      F:$(".toF").offset()?$(".toF").offset().top:0,
      G:$(".toG").offset()?$(".toG").offset().top:0,
      H:$(".toH").offset()?$(".toH").offset().top:0,
      I:$(".toI").offset()?$(".toI").offset().top:0,
      J:$(".toJ").offset()?$(".toJ").offset().top:0,
      K:$(".toK").offset()?$(".toK").offset().top:0,
      L:$(".toL").offset()?$(".toL").offset().top:0,
      M:$(".toM").offset()?$(".toM").offset().top:0,
      N:$(".toN").offset()?$(".toN").offset().top:0,
      O:$(".toO").offset()?$(".toO").offset().top:0,
      P:$(".toP").offset()?$(".toP").offset().top:0,
      Q:$(".toQ").offset()?$(".toQ").offset().top:0,
      R:$(".toR").offset()?$(".toR").offset().top:0,
      S:$(".toS").offset()?$(".toS").offset().top:0,
      T:$(".toT").offset()?$(".toT").offset().top:0,
      U:$(".toU").offset()?$(".toU").offset().top:0,
      V:$(".toV").offset()?$(".toV").offset().top:0,
      W:$(".toW").offset()?$(".toW").offset().top:0,
      X:$(".toX").offset()?$(".toX").offset().top:0,
      Y:$(".toY").offset()?$(".toY").offset().top:0,
      Z:$(".toZ").offset()?$(".toZ").offset().top:0
    };
    // console.log(obj.B)
    //footer跳转
    require("../common/ch.js")();
    //首字母导航栏
    $(".slidebar").on("tap","span",function(){
        //获取div的位置
        // console.log($(".to"+$(this).attr("class")).offset().top)
        $(".main").scrollTop(obj[$(this).attr("class")]-150);
    })
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
