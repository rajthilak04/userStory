var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");

// App start
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

// DB connection
mongoose.connect(config.database, function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log("Connected to the database");
    }
});

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Render Static files
app.use(express.static(__dirname + '/public'));

// api settings
var api = require('./app/routes/api')(app, express, io);
app.use("/api", api);

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/app/views/index.html');
});

http.listen(config.port, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Listening port 4000")
    }
})
