
var http = require("http");
var express = require("express");
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", "./public/views");

app.use(express.static(__dirname + "/public"));

// index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// index page
app.get('/index', (req, res) => {
    res.render('pages/index');
});

// about page
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

http.createServer(app).listen(8080, function () {
    console.log("Server address: http://localhost:8080");
});