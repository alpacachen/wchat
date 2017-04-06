/**
 * Created by huoqiu on 17/3/31.
 */
//应用主页设置
window.location.hash == ""?window.location.hash = "/":window.location.hash;
//引用组件
var index = require("./components/index/index.js");
var contacts = require('./components/contacts/index.js');
var find = require('./components/find/index.js');
var my = require('./components/my/index.js');
//注册路由
var body = document.getElementById("app");
var routes = {
    '/':function(){
        var data = {
            title:"微信",
            message:"微信",
            contacts:"联系人",
            find:"发现",
            my:"我的"
        }
        render(index,data)
    },
    '/contacts':function(){
        var data = {
            title:"微信",
            message:"微信",
            contacts:"联系人",
            find:"发现",
            my:"我的",
            RecommendedFriend:"新的朋友",
            GroupChats:"群聊",
            Tags:"标签",
            OfficialAccounts:"公众号"
        }
        render(contacts,data)
    },
    '/find':function(){
        var data = {
            title:"微信",
            message:"微信",
            contacts:"联系人",
            find:"发现",
            my:"我的",
            pengyouquan:"朋友圈",
            saoyisao:"扫一扫",
            yaoyiyao:"摇一摇",
            gouwu:"购物",
            youxi:"游戏"
        }
        render(find,data)
    },
    '/my':function(){
        var data = {
            title:"微信",
            message:"微信",
            contacts:"联系人",
            find:"发现",
            my:"我的",
            xiangce:"相册",
            shoucang:"收藏",
            qianbao:"钱包",
            kabao:"卡包",
            biaoqing:"表情",
            shezhi:"设置"
        }
        render(my,data)
    }
}
var router = Router(routes);
router.init();






//渲染函数
function render(obj,data) {
    body.innerHTML = obj.tpl(data);
    obj.func();
}