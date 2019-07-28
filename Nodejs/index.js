// IMPORTANDO FUNCIONES PROPIAS -------------------------------------
// const math = require('./funciones.js');
// console.log(math);
// console.log("La respuesta es: "+math.multiply(5,5));
//-------------------------------------------------------------------

// Sistemas operativo -----------------------------------------------
// const os = require('os');

// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.release());
//-------------------------------------------------------------------

// Escribiendo archivos ---------------------------------------------
// const fs = require('fs');

// fs.writeFile('./text.txt', 'Gonorrea ome gonorrea', function(err){
//   if(err){
//     console.log(err);
//   }
//   console.log("Archivo creado");
// })
//-------------------------------------------------------------------

//Leyendo archivos --------------------------------------------------
// const fs = require('fs');

// fs.readFile('./text.txt',function(err,data){
//   if(err) throw err;
//   console.log("Los datos dentro de mi archivo son:"+data);
// })
//-------------------------------------------------------------------

// Sever ------------------------------------------------------------
const http = require('http');

const handleServer = function(req,res){
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write('<h1>Hola mundo</h1>');
  res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
  console.log("Servidor funcionando en el puerto 3000");
});
//-------------------------------------------------------------------