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
        if(e && e.keyCode==13){
            $(".main").append('<div class="line2">'+
                '<img class="other" src='+ require("../common/QQ/5.jpg") +'>'+
                '<div class="arr"></div>'+
                '<p class="chatblock">'+$(".word").val()+'</p>'+
                '</div>');
            // $('.main').scrollTop( $('.main')[0].scrollHeight );
            $(".main").scrollTop(1000)
            console.log($(".main")[0].scrollHeight)
            console.log($(".main").scrollTop)
            console.log($(".main"))
            $(".word").val("");
        }
    }
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
