/**
 * Created by Suguna on 20-04-2016.
 */
var app = require('express')();
var http = require('http').Server(app);
var ser = require('./server.js');
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
global.io=io;
ser.nav();

//Listening on port 3000
http.listen(3000, function(){
    console.log('listening on port:3000');
});
