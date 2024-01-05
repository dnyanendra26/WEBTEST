var express=require('express');
var app=express();
app.use(express.static('public'));
app.get("/",(req,res)=>{res.send("Welcome to cdac acts");});
app.listen(8000);
console.log("App listening on port 8000");