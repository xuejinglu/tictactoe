var express = require("express");
var db = require( './config/db' );
var app = express();
require( './config/middleware' )( app, express );
require( './config/routes' )( app, express );

var server = require( 'http' ).createServer(app);
var io = require( 'socket.io' ).listen(server);
var Game = require( './games/games' );

io.sockets.on( 'connect' , function( socket ){
  console.log( 'we are connected!!' );
  socket.on( 'disconnect', function() {
    console.log( 'we are not connected anymore' );
  });
});

var port = 8080;
server.listen(8080, function(){
console.log("server listening on:", port);
});

module.exports = app;
