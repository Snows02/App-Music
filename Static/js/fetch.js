
var contenido = document.querySelector('#contenido')

function traer(){
    fetch('texto.txt')
    .then(data => data.text())
    .then(data =>{
        contenido.innerHTML = `${data}`
    })
}

// var changetext = document.getElementById('contenido')
// changetext.innerHTML = 'Perrea mami perrea'

// var likes = 0

// while (likes < 100){
//     if(likes==30){
//         changetext.style.background = "blue";
//         console.log("like es igual a 30")
//     }
//     if(likes==70){
//         changetext.style.background = "";
//         console.log("like es igual a 70")
//     }
//     likes++;
// }


// EVENTOS DEL MOUSE-------------------------------------

// var button = document.getElementById('melo');

// button.addEventListener('click',function(){
//     alert('Me sampaste gonorrea de click');
// })
// button.addEventListener('mouseleave',function(){
//     alert('Vuelve bb');
// })

// FUNCIONES ARROW ---------------------------------------

// var text = document.getElementById('contenido')

// newtext es el parametro que recibe la función arrow y que se va a contatenar

// var inputext = newtext => 'Este es el nuevo texto ' + newtext;

// text.innerHTML = inputext('de la pagina');