const databutton = document.getElementById('cohort'); //traigo al boton
const select = document.getElementById('selector');
const lista = document.getElementById('lista');

let progressUsers = [];

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

// hago el evento al selector "change", cuando escoja realiza la funcionn de la lista de users, tiene q tener parametro
/*lista.addEventListener('change', () => { //al selector se le adiciona el evento de escoger
  getProgress();
  getUsers(select.value);//ejecuta la funcion del user con el parametro
});*/


function getProgress () {
  const getProgressUsers = new XMLHttpRequest();
  getProgressUsers.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
  getProgressUsers.onload = function (event) {
    progressUsers = JSON.parse(event.target.responseText);
  }
  getProgressUsers.send();
}

function getUsers (cohort) { //le pongo un parametro que es el selector
  const getName = new XMLHttpRequest(); //creo una nueva instancia
  getName.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json'); //le digo q llame al url
  getName.onload = addUsers; //agrego la funcion para mostrar la lista de users
    function addUsers () {
    const names = JSON.parse(this.responseText); // me la va formatear en json
    let array=[]; //creo array vacio para almacenar los users correspondientes al cohort
    names.forEach(users => { // recorre la respuesta del cohort por cada elemento
      if (cohort === users.signupCohort) {//cuando comparo el valor del selector con el names.signup
        array.push(users); //cuando cumple esa funcion, en el array vacio adiciona los elementos
        let li = document.createElement('li'); //almaceno en una variable las opciones q voy a crear
        let a = document.createElement('a'); 
        a.innerHTML = users.name;
        a.addEventListener("click", function () {
          //document.getElementById("user").innerHTML = JSON.stringify(users);//convierte de objeto a string, lo invero del parse
          //document.getElementById("progress").innerHTML = JSON.stringify(progressUsers[users.id]);
          //console.log(users);
          //console.log(progressUsers[users.id]);
          computeUsersStats(users, progressUsers[users.id]);//cuando doy clik a la user se ejecuta esta función con parametros
        });
        li.appendChild(a); //las inserto en el html
        lista.appendChild(li); //agrego todas las opciones
      }
      
    });
  }
  getName.send();//si no se pone, no envia nada
}
select.addEventListener('change',function(e){
  if (select.value === 'lim-2018-03-pre-core-pw') {
      lista.innerHTML= '';
      getUsers(select.value);
      getProgress();
  }else{
      alert('Sin datos para mostrar');
  }

});

window.computeUsersStats = (user, progress) => {// estos mismo parametros lo recibe de la funcion declarada abajo
  usersWithStats = []
  stats = {}
  percent = progress['intro'].percent,//indico que coja el progress del usuario q selecciono con el id identificado
  exercises = {
    total: computeExercises(progress),
    completed: computeCompletedExercises(progress),
    percent: computePercent(progress),
  }
  read = {
    total: computeReads(progress),
    completed: 1,
    percent: 50,
  }
  quizzes = {
    total: 2,
    completed: 1,
    pscoreSum: 50,
    scoreAvg: 20
  }
  usersWithStats.stats = stats;//declaro la propiedad del array
  stats.percent = percent;// declarando la propiedad del objeto
  stats.exercises = exercises;
  stats.read = read;
  stats.quizzes = quizzes;
  console.log(usersWithStats);
  //return usersWithStats;

  //Información de Exercises

  function computeCompletedExercises (progress) {
    exercises = progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises'];
    let completedExercises = exercises['01-coin-convert']['completed'] + exercises['02-restaurant-bill']['completed'];
    console.log(progress);
    return completedExercises;
  }

  function computeExercises (progress) {
    //debugger
    let totalExercises = (Object.keys((progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises']))).length;
    return totalExercises;
  }

  function computePercent (progress) { 
    let totalExercises = (Object.keys((progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises']))).length;
    exercises = progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises'];
    let completedExercises = exercises['01-coin-convert']['completed'] + exercises['02-restaurant-bill']['completed'];
    return completedExercises/totalExercises*100;
  }
  // Información de Reads
  function computeReads (progress) {
    contadorReads = 0;
    //let keyofparts = progress['intro']['units'];  
    for (let key in progress['intro']['units']) {
      units = progress['intro']['units'][key]['parts'];
      //console.log(progress['intro']['units'][key]);
      for (let subkey in units) {
        //console.log(subkey);
        if (units[subkey].type === 'read') {
          contadorReads++;
        }
      }
    }
    return contadorReads;
  }

}
      
  //console.log('resultado read' + contadorReads)
     /* for (let subkey in keyofparts[key]){
         if (progress[key][subkey].type === 'read') {
                contadorReads++;
                */