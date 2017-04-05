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
    //右划
    $(".main span").swipeRight(function(){
        var $this =$(this);
        $this.removeClass("left");
    });
    //删除
    $(".main span i").on("click",function(){
        $(this).parent().remove()
    })
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
