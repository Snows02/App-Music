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
const fs = require('fs');

fs.readFile('./text.txt',function(err,data){
  if(err) throw err;
  console.log("Los datos dentro de mi archivo son:"+data);
})
//-------------------------------------------------------------------