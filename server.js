const express=require("express");
const app=express();

app.use('/images', express.static('images'));


app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});
app.get('/css/index.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/index.css");
});
app.get('/css/signin.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/signin.css");
});
app.get('/js/signin.js', function(req, res) {
    res.sendFile(__dirname + "/" + "js/signin.js");
});


app.get("/home.html",function(req,res){
    res.sendFile(__dirname +"/home.html");
});

app.get('/css/bootstrap.min.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/bootstrap.min.css");
});
app.get('/css/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/style.css");
});
app.get('/js/main.js', function(req, res) {
    res.sendFile(__dirname + "/" + "js/main.js");
});



app.get("/products.html",function(req,res){
    res.sendFile(__dirname +"/products.html");
});

app.get('/css/stylecart.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/stylecart.css");
});
app.get('/js/script.js', function(req, res) {
    res.sendFile(__dirname + "/" + "js/script.js");
});




app.get("/contact",function(req,res){
    res.send("Contact me at: example@email.com");
});

app.listen(3000,function(){
    console.log("server has been started at port 3000");
});


