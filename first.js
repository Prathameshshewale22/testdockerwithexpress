const exp=require("express");
var app=exp();
var bodyparser=require("body-parser");
const m5=require("../nodejs/module1");

// app.use(function(req,resp,next){
//     console.log(req.url+"      "+req.method); 
//     next();
// });
// app.use(function(req,resp,next){
//   console.log("in second middleware");
//   next();
// });

app.use(bodyparser.urlencoded({extended:false}));


app.get("/home",function(req,resp){
  console.log("in get method");
   resp.sendFile("./public/home.html",{root:__dirname});
  
});
app.get("/aboutus",function(req,resp){
  console.log("in aboutus");
  resp.sendFile("./public/aboutus.html",{root:__dirname});
});
app.get("/form",function(req,resp){
  resp.sendFile("./public/addition.html",{root:__dirname});
});
app.post("/submit_data",function(req,resp){
  var num11=req.body.num1;
  var num22=req.body.num2;
  console.log(num11+"   "+num22);
   result=m5.add(num11,num22);
   console.log(result);
   resp.write("<h1>result:"+result+"</h1>");
   resp.end();
})
 app.listen(3100);
 console.log("server start");