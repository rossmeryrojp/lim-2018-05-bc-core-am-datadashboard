//OBTENER PROCESAR Y MANIPULAR DATOS
function handleSuccess () {
    console.log(data);  
}
function handleError () {
    console.log('Se ha presentado un error');
}
const xhrCohorts = new XMLHttpRequest();
xhrCohorts.open('GET', '../data/cohorts.json');
xhrCohorts.onload = handleSuccess;
xhrCohorts.onerror = handleError;
xhrCohorts.send();

function addCohorts(){
const data = JSON.parse(event.target.responseText);
console.log(data);
}
