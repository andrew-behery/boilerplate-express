var express = require('express');
var app = express();
require('dotenv').config()

absolutePath = __dirname + "/views/index.html"

app.get("/", function(req, res) {
    //res.send("Hello Express")
    res.sendFile(absolutePath)
})

app.get("/json", function(req, res){
    if(process.env.MESSAGE_STYLE === "uppercase"){
         res.json({"message": "HELLO JSON"});
    }
         res.json({"message": "Hello json"});
    }
    
);

app.use("/public", express.static(__dirname + "/public"))

console.log(process.env.MESSAGE_STYLE)

module.exports = app;
































 module.exports = app;
