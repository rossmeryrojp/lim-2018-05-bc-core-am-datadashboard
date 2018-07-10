const databutton = document.getElementById('cohort');
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

window.computeUsersStats = (user,progress) => {
  usersWithStats = []
    stats = {}
      percent = progress['intro'].percent,
      exercises = {
        total: computeExercises (progress),
        completed: computeCompletedExercises (progress),
        percent: computePercent (progress),
      }
      read = {
        total: computeReads (progress),
        completed: 1,
        percent: 50,
      }
      quizzes = {
        total: 2,
        completed: 1,
        pscoreSum: 50,
        scoreAvg: 20
      }
  usersWithStats.stats = stats;
  stats.percent = percent;
  stats.exercises = exercises;
  stats.read = read;
  stats.quizzes = quizzes;
  console.log(usersWithStats);
  return usersWithStats;
}

computeExercises = (progress) => {
  let totalExercises = (Object.keys((progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises']))).length;
  return totalExercises;
}

computeCompletedExercises = (progress) => {
  exercises = progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises'];
  let completedExercises = exercises['01-coin-convert']['completed'] + exercises['02-restaurant-bill']['completed'];
  console.log(progress);
  return completedExercises;
}

computePercent = (progress) => { 
  let totalExercises = (Object.keys((progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises']))).length;
  exercises = progress['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['exercises'];
  let completedExercises = exercises['01-coin-convert']['completed'] + exercises['02-restaurant-bill']['completed'];
  return completedExercises/totalExercises*100;
}

computeReads = (progress) => {
  let contadorReads = 0;  
  for (let key in progress) {
      for (let subkey in progress[key]){
         if (progress[key][subkey].type === 'read') {
                contadorReads++;
    }
  }
}
}
console.log(computeReads);

  //let parts = ((progress['intro']['units']['02-variables-and-data-types']['parts']));
  //let totalParts = 0;
  //for (const idPart in parts) {
    //if (parts[idPart].type === 'read'){ 
      // console.log(idPart);
      //totalParts = totalParts + 1;

  





function getProgress () {
  const getProgressUsers = new XMLHttpRequest();
  getProgressUsers.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
  getProgressUsers.onload = function (event) {
    progressUsers = JSON.parse(event.target.responseText);
  }
  getProgressUsers.send();
}

function getUsers (cohort) { 
  const getName = new XMLHttpRequest(); 
  getName.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
  getName.onload = addUsers;
    function addUsers () {
    const names = JSON.parse(this.responseText);
    let array=[];
    names.forEach(users => {
      if (cohort === users.signupCohort) {
        array.push(users);
        let li = document.createElement('li');
        let a = document.createElement('a'); 
        a.innerHTML = users.name;
        a.addEventListener("click", function () {

          computeUsersStats (users, progressUsers[users.id]);
        });
        li.appendChild(a);
        lista.appendChild(li);
      }
      
    });
  }
  getName.send();
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