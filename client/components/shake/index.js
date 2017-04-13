/**
 * Created by huoqiu on 17/3/31.
 */
var handlebars;
handlebars = require('handlebars');
var html = handlebars.compile(require('./index.html'));
var func = function(){
    //footer跳转
    require("../common/ch.js")();
    console.log(window.DeviceMotionEvent)
    if(window.DeviceMotionEvent){
        window.addEventListener("devicemotion",devicHndler,false);
    }else{
        alert("your phone is suck!!!")
    }
    var SHAKE_THRESHOLD = 500;
    var last_update = 0;
    var x, y, z, last_x, last_y, last_z;
    function devicHndler(eventData) {
        var acceleration =eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime - last_update)> 300) {
            var diffTime = curTime -last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
                document.getElementById("audio").play();
                $(".handphone").addClass("shakeshake");
                setTimeout(function(){
                    $(".handphone").removeClass("shakeshake");
                    showpeo();
                },1500)
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    }
    function showpeo(){
        $(".loading").show();
        setTimeout(function(){
            $(".loading").hide();
            $(".peo").show();
        },2000)
    }
};
module.exports = function() {
    return {
        tpl:html,
        func:func
    };
}();
