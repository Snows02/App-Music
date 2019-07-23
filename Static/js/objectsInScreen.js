// var object = {
//     "nombre": "Iván",
//     "apellido": "Nieves Ardila",
//     "edad": 21,
//     "casado": false,
//     "novia":{
//         "nombre": "Verónica",
//         "apellido":"Álvarez Muñoz",
//         "edad": 22,
//         "casado": false
//     }
// }

// console.log(object)

//  var arrayobjects = [
//      {
//          "nombre": "Iván",
//          "apellido": "Nieves"
//      },
//      {
//         "nombre": "Pedro",
//         "apellido": "Ardila"
//      },
//      {
//          "nombre": " Nathaly",
//          "apellido": "Nieves"
//      }
//  ]

// arrayobjects.push({"nombre": " Natalia",
// "apellido": "XD"})
// if (arrayobjects[0].nombre == "Iván")
// {
//     console.log(arrayobjects)
// }

// // la variable i es como si fuera el array en una posición ejem: array[0]
// for (let i of arrayobjects){
//     console.log(i.nombre)
// }

//  for (let i=0; i< arrayobjects.length; i++){
//      console.log(arrayobjects[i].nombre)
//  }

var dolar =[{"fecha":"2019-07-17T04:00:00.000Z","valor":679.48},{"fecha":"2019-07-15T04:00:00.000Z","valor":681.07},{"fecha":"2019-07-12T04:00:00.000Z","valor":683.38},{"fecha":"2019-07-11T04:00:00.000Z","valor":685.4},{"fecha":"2019-07-10T04:00:00.000Z","valor":688.88},{"fecha":"2019-07-09T04:00:00.000Z","valor":685.83},{"fecha":"2019-07-08T04:00:00.000Z","valor":683.12},{"fecha":"2019-07-05T04:00:00.000Z","valor":677.64},{"fecha":"2019-07-04T04:00:00.000Z","valor":680.48},{"fecha":"2019-07-03T04:00:00.000Z","valor":681.3},{"fecha":"2019-07-02T04:00:00.000Z","valor":677.62},{"fecha":"2019-07-01T04:00:00.000Z","valor":679.15},{"fecha":"2019-06-28T04:00:00.000Z","valor":679.86},{"fecha":"2019-06-27T04:00:00.000Z","valor":680.06},{"fecha":"2019-06-26T04:00:00.000Z","valor":678.32},{"fecha":"2019-06-25T04:00:00.000Z","valor":682.31},{"fecha":"2019-06-24T04:00:00.000Z","valor":683.41},{"fecha":"2019-06-21T04:00:00.000Z","valor":684.19},{"fecha":"2019-06-20T04:00:00.000Z","valor":693.99},{"fecha":"2019-06-19T04:00:00.000Z","valor":696.81},{"fecha":"2019-06-18T04:00:00.000Z","valor":699.52},{"fecha":"2019-06-17T04:00:00.000Z","valor":698.72},{"fecha":"2019-06-14T04:00:00.000Z","valor":696.25},{"fecha":"2019-06-13T04:00:00.000Z","valor":694.89},{"fecha":"2019-06-12T04:00:00.000Z","valor":693.6},{"fecha":"2019-06-11T04:00:00.000Z","valor":697.34},{"fecha":"2019-06-10T04:00:00.000Z","valor":692.28},{"fecha":"2019-06-07T04:00:00.000Z","valor":692.21},{"fecha":"2019-06-06T04:00:00.000Z","valor":693.25},{"fecha":"2019-06-05T04:00:00.000Z","valor":696.78},{"fecha":"2019-06-04T04:00:00.000Z","valor":704.59}]

var aux = document.getElementById("json")

function show(){
    for (let i of dolar){
        aux.innerHTML+=`
        <li>${i.fecha},
        ${i.valor}</li><br>
        `
    }
}
