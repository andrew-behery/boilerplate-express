var express = require('express');
var app = express();

absolutePath = __dirname + "/views/index.html"

app.get("/", function(req, res) {
    //res.send("Hello Express")
    res.sendFile(absolutePath)
})

app.get("/json", function(req, res){
    if(process.env.MESSAGE_STYLE == "uppercase"){
        return res.json({"message": "HELLO JSON"})
    } else {
        return res.json({"message": "Hello json"})
    }
    
})

app.use("/public", express.static(__dirname + "/public"))



































 module.exports = app;
