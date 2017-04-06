/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    //首字母导航栏
    $(".slidebar").on("tap","span",function(){
    	// window.scrollTop($(".to"+$(this).attr("class")).scrollTop())
    	console.log($("toB").height())
    })
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
