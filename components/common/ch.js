/**
 * Created by huoqiu on 17/4/5.
 */
module.exports = function(){
    $(".message").on("tap",function(){
        window.location.hash = "/";
    });
    $(".contacts").on("tap",function(){
        window.location.hash = "/contacts";
    });
    $(".find").on("tap",function(){
        window.location.hash = "/find";
    });
    $(".my").on("tap",function(){
        window.location.hash = "/my";
    })
}