//LEYENDO TXT -------------------------------------------------------
// let contenido = document.getElementById("contenido")

// function show(){
//     fetch('text.txt')
//     .then(data => data.text())
//     .then(data =>{
//         contenido.innerHTML = `<p>${data}</p>`
//     })
// }
//-------------------------------------------------------------------

//LEYENDO API -------------------------------------------------------
let contenido = document.getElementById("contenido")
function show(){
    fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then (data => {
        console.log(data.results[0])
        contenido.innerHTML = `
        <img src="${data.results[0].picture.large}" width="100px" class="imgcircle">
        <p><b>Nombre:</b> ${data.results[0].name.first} ${data.results[0].name.last} </p>
        `
    })
    
}
//-------------------------------------------------------------------