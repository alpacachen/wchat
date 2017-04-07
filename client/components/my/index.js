/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    $(".erweima").on("click",function(e){
        e.stopPropagation()
        alert("erweima")
    })
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
