const databutton = document.getElementById('cohort'); //traigo al boton
const select = document.getElementById('selector');
const lista = document.getElementById('lista');
const pruebaBtn = document.getElementById('prueba-btn')


databutton.addEventListener('click', function (e) { //evento del boton para get list
  e.preventDefault(); //para que no recargue
  getList();
});

function getList() {
  const getCohort = new XMLHttpRequest(); //creo una nueva instancia
  getCohort.open('GET', '../data/cohorts.json'); //le digo q llame al url
  getCohort.onload = addCohorts; // para que entienda la data porque esta en objetos
  getCohort.send();
}

function addCohorts(event) {
  const data = JSON.parse(event.target.responseText); // me la va formatear en json, en vez de this pongo event.target para traer el array de la respuesta
  data.forEach(cohort => { // recorre la respuesta del cohort por cada elemento
    let option = document.createElement('option'); //almaceno en una variable las opciones q voy a crear
    option.innerHTML = cohort.id; //las inserto en el html
    option.value = cohort.id; //inserta el id de esa data
    select.appendChild(option); //agrego todas las opciones

  });
}

function getUsers(parametro) { //le pongo un parametro que es el selector
  const getName = new XMLHttpRequest(); //creo una nueva instancia
  getName.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json'); //le digo q llame al url
  getName.onload = addUsers; //agrego la funcion para mostrar la lista de users
    function addUsers () {
    const names = JSON.parse(this.responseText); // me la va formatear en json
    let array=[]; //creo array vacio para almacenar los users correspondientes al cohort
    names.forEach(users => { // recorre la respuesta del cohort por cada elemento
      if (parametro === users.signupCohort) {//cuando comparo el valor del selector con el names.signup
        array.push(users); //cuando cumple esa funcion, en el array vacio adiciona los elementos
        let li = document.createElement('li'); //almaceno en una variable las opciones q voy a crear
        li.innerHTML = users.name; //las inserto en el html
        lista.appendChild(li); //agrego todas las opciones
      }
    });
  }
  getName.send();//si no se pone, no envia nada
}
// hago el evento al selector "change", cuando escoja realiza la funcionn de la lista de users, tiene q tener parametro
select.addEventListener('change', ()=>{ //al selector se le adiciona el evento de escoger
    getUsers(select.value)//ejecuta la funcion del user con el parametro
} );
