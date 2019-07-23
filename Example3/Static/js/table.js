var print = document.getElementById("print")

function show(){
    fetch('tabla.json')
    .then(data => data.json())
    .then(data => {
        // console.log(data.length)
        for (let i = 0; i<data.length;i++){
            print.innerHTML +=`
                <tr>
                <td>${data[i].id}</td>
                <td>${data[i].nombre}</td>
                <td>${data[i].email}</td>
                <td>${data[i].estado ? "Activo" : "Eliminado"}</td>
                </tr>
            `
        }
    })
}