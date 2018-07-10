/*window.ComputerUsersStats = (user,progress,cohort) => {




}

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
            document.getElementById("user").innerHTML = JSON.stringify(users);//convierte de objeto a string, lo invero del parse
            document.getElementById("progress").innerHTML = JSON.stringify(progressUsers[users.id]);
            console.log(progressUsers[users.id]);
          });
          li.appendChild(a); //las inserto en el html
          lista.appendChild(li); //agrego todas las opciones
        }
      });
    }
    getName.send();//si no se pone, no envia nada
  }*/
