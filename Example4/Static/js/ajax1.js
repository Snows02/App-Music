document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','Static/Text/archivo.txt',true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.querySelector("#res").innerHTML = this.responseText;
        }
    }
}