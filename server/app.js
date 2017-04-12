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
    // console.log(w)
    res.sendfile(path.resolve(__dirname,"..","client/index.html"));
});
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
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log(server.address().address)
//     console.log('Example app listening at http://%s:%s', host, port);
// });