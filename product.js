const exp=require("express");
var app=exp();
var bodyparser=require("body-parser");
const m1=require("./array.js");
const { urlencoded } = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/prod",function(req,resp){
    resp.sendFile("./public/proddetails.html",{root:__dirname});
});

app.get("/proddata",function(req,resp){
    if(req.query.btn==="add"){
    console.log("in proddata");
    var pid=req.query.id;
    var pname=req.query.name;
    var price=req.query.price;
    ob={pid,pname,price};
    m1.insert(ob);
    resp.send("added sucessfully");
    }
    else{
        var pid=req.query.id;
        var obj=m1.search(pid);
        if(obj!=null){
            resp.send(JSON.stringify(obj));
        }
        else{
            resp.write("<h1>not found</h1>")
            resp.end();
        }
    }
});
app.listen(1000);
console.log("server start");