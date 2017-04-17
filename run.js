/**
 * Created by lenovo on 2017/4/17.
 */
var express = require("express"); //引用express框架模块，将其内部的exports赋值给exports变量。
var app = express();//调用express方法，将返回值赋值给app变量。
app.use("/",express.static(__dirname));
var port = 8004;
app.listen(port,function(){
    console.log('server is running on '+port);
});