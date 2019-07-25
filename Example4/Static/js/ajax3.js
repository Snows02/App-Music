document.querySelector("#boton").addEventListener('click', function(){
    traerDatos('dolar')
});

document.querySelector("#boton2").addEventListener('click', function(){
    traerDatos('euro')
});

function traerDatos(moneda){
    let url = `https://mindicador.cl/api/${moneda}`;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url, true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.status == 200 && this.readyState == 4){
            
            let json = JSON.parse(this.responseText);
            let aux = document.querySelector("#res");
            aux.innerHTML = '';
            let cont = 0;
            for (let i of json.serie){
                cont++;
                aux.innerHTML += `
                <li>${i.fecha.substr(0,10)} | $
                ${i.valor}</li><br>
                `
                if (cont==10){
                    break;
                }
            }
        }
    }
}
