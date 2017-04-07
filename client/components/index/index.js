/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    //左划
    $(".main span").swipeLeft(function(){
        var $this =$(this);
        $this.addClass("left");
    });
    $(".main span").on("ontouchmove",function(e){e.preventDefault()});
    //右划
    $(".main span").swipeRight(function(){
        var $this =$(this);
        $this.removeClass("left");
    });
    //删除
    $(".main span i").on("click",function(){
        $(this).parent().remove()
    });
    //+
    $(".add").on("click",function(e){
        e.stopPropagation();
        var additem = $(".additem");
        additem.show();
        //点击周围弹框隐藏
        $(".main span,.header").one("click",function(){
            additem.hide()
        })
    })
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
