
//Funcion para realizar peticiones HTTP
function obtenerPersonajes(endPoint, callback) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText)
        }
    }

    request.open('GET', endPoint, true);
    request.send();
}


function renderizarPersonajes(response) {
    const data = JSON.parse(response).results;
    
    let htmlCode = '';
    data.forEach(personaje => {
        htmlCode += `<div class="card">
                <div class="img-card">
                    <img src="${personaje.image}" alt="Imagen Personaje ${personaje.id}">
                </div>
                <div class="text-card">
                    <h3> ${personaje.id}. ${personaje.name}</h3>
                    <b>Status: </b> ${personaje.status} <br>
                    <b>Gender: </b>${personaje.gender} <br>
                    <b>Species: </b> ${personaje.species} <br>
                </div>
                </div>`;

    });
    console.log($resultado);
    $resultado.innerHTML = htmlCode;

}


//Seleccciono el boton sobre el cual va a ir el evento
const $buscar = document.getElementById('buscar');
const endPoint = 'https://rickandmortyapi.com/api/character';
const  $resultado = document.getElementById('resultado');
const $body = document.getElementsByTagName('body');



$buscar.addEventListener('click',function(){
    
    if($buscar.innerText !='LIMPIAR'){
        
        obtenerPersonajes(endPoint,renderizarPersonajes)
        $buscar.innerText ='LIMPIAR';
    }else{
        $resultado.innerHTML = "";  
        $buscar.innerText ='BUSCAR PERSONAJES';
    }
    
   
    
    
});