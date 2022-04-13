// HACKATON CODERHOUSE 2022

// ESPECIFICACIONES:

// - El desafío estará enfocado en el registro de los usuarios.
// - Los usuarios pueden ser Jueces o Participantes.
// - Los jueces se registrarán su nickname, nombre, apellido y edad.
// - El único dato que no podrá repetirse entre los usuarios registrados será el nickname(único para cada uno).
// - Los participantes se rergistrarán de forma grupal y obligatoriamente el grupo será de 4 integrantes.
// - Por simulación ya existirá un grupo de 3 integrantes, faltando uno por registrarse.
// - Hay 2 opciones para el registro, 1 para ser parte del jurado y 2 para formar un equipo y concursar en la hackaton.
// - El algoritmo evaluará si dejó la casilla en blanco o escogió una opción diferente a 1 o 2.
// - El algoritmo evaluará si el nickname ingresado ya existe, de ser así el usuario está obligado a ingresar otro.
// - El array totalEquipos almacenará todos los arrays de los diferentes equipos.

import {team, jury, totalTeam} from "./dbUsers.js";


/* Validación de formulario */

//Variables
const   d              = document,
        form           = d.getElementById("form"),
        inputEmail     = d.getElementById("email"),
        inputUserName  = d.getElementById("username"),
        inputName      = d.getElementById("name"),
        inputLastName  = d.getElementById("lastName"),
        btnForm        = d.getElementById("btnForm"),
        formControl    = d.querySelectorAll(".form-control");


const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let valueEmail= "",
    valueUsername = "",
    type = 0,
    username = "",
    name = "",
    lastName = "",
    email = "",
    newUser = "";

//Creación de Clases
class User{
    constructor(type,username,name,lastName,email){
        this.tipo = type;
        this.username = username;
        this.nombre = name;
        this.apellido = lastName;
        this.email = email;
    }
}


//Creando un Array para almacenar los emails
const emailCompetitor = team.map(el => el.email);
const emailJury = jury.map(el => el.email);
const saveEmails = emailCompetitor.concat(emailJury);


//Creando Arrays para almacenar los usernames
const usernameCompetitor = team.map(el => el.username);
const usernameJury = jury.map(el => el.username);
const saveUsernames = usernameCompetitor.concat(usernameJury);


//Creando elementos
let check = d.createElement("i");
    check.classList.add("bi","bi-check","valido");



//Eventos
eventListeners();
function eventListeners(){

    btnForm.addEventListener("click",submit);
    inputEmail.addEventListener("blur",validateEmail);
    inputUserName.addEventListener("blur", validateUsername);
    inputName.addEventListener("blur",e => name = e.target.value);
    inputLastName.addEventListener("blur",e => lastName = e.target.value);
    // form.addEventListener("submit", submitEmail);
}





//Funciones
function validateEmail(e) {
    valueEmail = e.target.value;

    if(e.target.value.length > 0){
        if(!saveEmails.includes(valueEmail)){
            saveEmails.push(valueEmail);
            email += valueEmail;
        } else{
            alertMessage("Usted ya está registrado!");
        }
    }
    return email;
}


function validateUsername(e){
    valueUsername = e.target.value;

    if(e.target.value.length > 0){
        if(!saveUsernames.includes(valueUsername)){
            saveUsernames.push(valueUsername);
            username += valueUsername;
        } else{
            alertMessage("Usuario ya existe!");
        }
    }
    return username;
}


function alertMessage(message) {
    
    const errorMessage = d.createElement("p");
	errorMessage.textContent = message;
	errorMessage.classList.add("error");

	const errors = d.querySelectorAll(".error");

    if (errors.length === 0){
        btnForm.before(errorMessage);
    }
}

function addUsers(){
    if(newUser.type === "juez"){
        jury.push(newUser);
    } else {
        let competitor = newUser;
        team.push(competitor);
    }
    totalTeam.push(team)
}

function submit(e) {
    e.preventDefault();

    newUser = new User("participante",username,name,lastName,email );
    console.log(newUser);
    addUsers();
    console.log(team);

    let cardBody = d.getElementById("cardBody");
    cardBody.innerHTML =    `<h5 class="card-title">${username}</h5>
                        <p>Nombre:</p><span>${name}</span><br>
                        <p>Apellido:</p><span>${lastName}</span><br>
                        <p>Email:</p><span>${email}</span>`;
    
}



/*Reducción de velocidad de video de fondo*/
let video = document.querySelector('video');
video.defaultPlaybackRate = .3;
video.load();
