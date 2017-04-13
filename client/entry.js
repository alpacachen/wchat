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
var shake = require('./components/shake/index.js')
var QRcode = require('./components/QRcode/index.js')
//注册路由
var body = document.getElementById("app");
var routes = {
    '/':function(){
        //获取聊天列表
        $.get('/list',function(data){
            if (data.success){
                render(index,data);
            }else{
                alert("获取数据出错");
            }
        })

    },
    '/contacts':function(){
        var data = {};
        render(contacts,data);
    },
    '/find':function(){
        var data = {};
        render(find,data);
    },
    '/my':function(){
        var data = {
            name:"陈湘1",
            wchatid:"微信号",
            id:"cx_12138"
        };
        render(my,data);
    },
    '/chat/:chatId':function(chatId){
        $.get('/chattingRecords/'+chatId,function(data){
            render(chat,data);
        })
    },
    '/shake':function(){
        var data = {};
        render(shake,data);
    },
    '/QRcode':function(){
        var data= {};
        render(QRcode,data);
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