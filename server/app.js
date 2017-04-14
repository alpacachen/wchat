/**
 * Created by huoqiu on 17/4/7.
 */
var express = require("express");
var path = require('path');
var http = require("http");
var app = express();
// app.use("public",express.static(path.resolve(__dirname,"..","client")));
app.use(express.static(path.resolve(__dirname,"../client")));
app.get('/', function (req, res) {
    res.sendfile(path.resolve(__dirname,"..","client/index.html"));
    console.log("index")
});
//获取消息列表
app.get('/list',function(req,res){
    var data  = {
        success:true,
        list:[
            {name:"哈登",lastmsg:"下午来打球",pic:"harden.jpg"},
            {name:"小四",lastmsg:"想要出演绝迹男主角吗？",pic:"guojingming.jpg"},
            {name:"王力宏",lastmsg:"要不要来听我的演唱会",pic:"wanglihong.jpg"},
            {name:"范冰冰",lastmsg:"晚上来我家",pic:"fanbingbing.jpg"},
            {name:"周杰伦",lastmsg:"帮我看一天孩子",pic:"zhoujielun.jpg"},
            {name:"马云",lastmsg:"需要多少钱投资？",pic:"mayun.jpg"}
        ]
    }
    res.json(data)
});
//读取历史聊天记录
app.get('/chattingRecords/:id',function(req,res){
// req.params.id
    var data = {}
    var str;
    var pic;
    switch (req.params.id)
    {
        case "哈登":
            str="下午来打球";
            pic = "harden.jpg";
            break;
        case "小四":
            str="想要出演绝迹男主角吗？";
            pic = "guojingming.jpg";
            break;
        case "王力宏":
            str="要不要来听我的演唱会";
            pic = "wanglihong.jpg";
            break;
        case "范冰冰":
            str="晚上来我家";
            pic = "fanbingbing.jpg";
            break;
        case "周杰伦":
            str="帮我看一天孩子";
            pic = "zhoujielun.jpg";
            break;
        case "马云":
            str="需要多少钱投资？";
            pic = "mayun.jpg";
            break;
    }
    data.record = str;
    data.pic = pic;
    res.json(data)
});
//聊天
app.get('/chat', function (req, res) {
    var msg = {
        1:"Hello",
        2:"你好",
        3:"阿尼哈塞呦",
        4:"好久不见",
        5:"噶哈呀",
        6:"怎么了？",
        7:"666",
        8:"扎心了，老铁",
        9:"想我了吗？",
        0:"要请我吃饭啊"
    };
    res.json(msg[Math.floor(Math.random()*10)])
});
http.createServer(app).listen('3000','0.0.0.0');