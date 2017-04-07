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
http.createServer(app).listen('3000','0.0.0.0');
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log(server.address().address)
//     console.log('Example app listening at http://%s:%s', host, port);
// });