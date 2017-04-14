/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars;
handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    // $("#video")[0].play()
    // var canvas = document.getElementById("canvas")
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = { "video": true },
        errBack = function(error) {
            alert("你的浏览器暂时不支持调用摄像头,请换手机QQ浏览器或手机火狐试一下！！！"+error.message)
            // history.back()
        };
    if(navigator.getUserMedia) { // 标准模式
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if(navigator.webkitGetUserMedia) { // 谷歌
        navigator.webkitGetUserMedia(videoObj, function(stream){
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    else if(navigator.mozGetUserMedia) { // 火狐
        navigator.mozGetUserMedia(videoObj, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    $(".but").on("click",function(){
        context.drawImage(video, 0, 0, 640, 480);
        alert("ss")
    })
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
