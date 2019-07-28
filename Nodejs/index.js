// Sever ------------------------------------------------------------
// const http = require('http');

// const colors = require('colors');

// const handleServer = function(req,res){
//   res.writeHead(200, {'Content-type': 'text/html'});
//   res.write('<h1>Hola mundo</h1>');
//   res.end();
// }

// const server = http.createServer(handleServer);

// server.listen(3000, function(){
//   console.log("Servidor funcionando en el puerto 3000".yellow);
// });
//-------------------------------------------------------------------

// Server usando express --------------------------------------------
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req,res){
  res.send('<h1>Hola mundo con Express y Nodejs<h1>');
  res.end();
})

server.listen(3000, function(){
  console.log("Servidor ejecutandose en el puerto 3000".red);
})
//-------------------------------------------------------------------