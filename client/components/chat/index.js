/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars;
handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    document.onkeydown = function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        //发送消息
        if(e && e.keyCode==13){
            $(".main").append('<div class="line2">'+
                '<img class="other" src='+ require("../common/QQ/4.jpg") +'>'+
                '<div class="arr"></div>'+
                '<p class="chatblock">'+$(".word").val()+'</p>'+
                '</div>');
            $(".main").children().last()[0].scrollIntoView()
            $(".word").val("");
            $.get("chat",function(data){
                var a = "5.jpg";
                $(".main").append('<div class="line1">'+
                    '<img class="other" src='+ $(".main").attr("pic") +'>'+
                    '<div class="arr"></div>'+
                    '<p class="chatblock">'+data+'</p>'+
                    '</div>');
                $(".main").children().last()[0].scrollIntoView()
            })
        }
    }
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
