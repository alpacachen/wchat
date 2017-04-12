/**
 * Created by huoqiu on 17/3/31.
 */
//应用主页设置
window.location.hash == ""?window.location.hash = "/":window.location.hash;
//选择语言
var lang = require("./components/language/chinese.js");
//引用组件
var index = require("./components/index/index.js");
var contacts = require('./components/contacts/index.js');
var find = require('./components/find/index.js');
var my = require('./components/my/index.js');
var chat = require('./components/chat/index.js');
//注册路由
var body = document.getElementById("app");
var routes = {
    '/':function(){
        var data = {};
        render(index,data)
    },
    '/contacts':function(){
        var data = {};
        render(contacts,data)
    },
    '/find':function(){
        var data = {};
        render(find,data)
    },
    '/my':function(){
        var data = {
            name:"陈湘1",
            wchatid:"微信号",
            id:"cx_12138"
        };
        render(my,data)
    },
    '/chat/:chatId':function(chatId){
        alert(chatId)
        // $.post()
        var data = {
            chatId:"chatId"
        };
        render(chat,data)
    }
}
var router = Router(routes);
router.init();






//渲染函数
function render(obj,data) {
    $.extend(data,lang)
    body.innerHTML = obj.tpl(data);
    obj.func();
}