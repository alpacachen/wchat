/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
handlebars.registerHelper("getsrc",function(val){
    var a = "/components/common/QQ/"+val;
    return a;
})
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    //左划
    $(".main a").swipeLeft(function(){
        var $this =$(this);
        $this.addClass("left");
    });
    $(".main a").on("ontouchmove",function(e){e.preventDefault()});
    //右划
    $(".main a").swipeRight(function(){
        var $this =$(this);
        $this.removeClass("left");
    });
    //删除
    $(".main a i").on("click",function(e){
        e.preventDefault()
        e.stopPropagation();
        $(this).parent().remove()
    });
    //+
    $(".add").on("tap",function(e){
        e.stopPropagation();
        var additem = $(".additem");
        additem.show();
        //点击周围弹框隐藏
        $(".main,.header").one("click",function(e){
            e.preventDefault()
            additem.hide()
        })
    })
    //

};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
