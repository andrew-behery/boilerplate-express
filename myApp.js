var express = require('express');
var app = express();

absolutePath = __dirname + "/views/index.html"

app.get("/", function(req, res) {
    //res.send("Hello Express")
    res.sendFile(absolutePath)
})

console.log(absolutePath);



































 module.exports = app;
