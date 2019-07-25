document.querySelector("#boton").addEventListener('click',traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','Static/Text/catalogo.json',true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let json = JSON.parse(this.responseText);
            for (let i of json){
                document.querySelector("#res").innerHTML += `
                <tr>
                <td>${i.titulo}</td>
                <td>${i.artista}</td>
                </tr>
            `
            }
        }
    }
}