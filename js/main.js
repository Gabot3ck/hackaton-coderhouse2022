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
        inputPassword  = d.getElementById("password"),
        btnForm        = d.getElementById("btnForm"),
        icon1          = d.getElementById("icon1"),
        icon2          = d.getElementById("icon2"),
        icon3          = d.getElementById("icon3"),
        icon4          = d.getElementById("icon4"),
        icon5          = d.getElementById("icon5");


const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let valueEmail= "",
    valueUsername = "",
    valueName = "",
    valueLastName = "",
    valuePassword = "",
    type = 0,
    username = "",
    name = "",
    lastName = "",
    email = "",
    password = "",
    newUser = "";

//Creación de Clases
class User{
    constructor(type,username,name,lastName,email,password){
        this.tipo = type;
        this.username = username;
        this.nombre = name;
        this.apellido = lastName;
        this.email = email;
        this.password = password;
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







//Eventos
eventListeners();
function eventListeners(){

    btnForm.addEventListener("click",submit);
    inputEmail.addEventListener("blur",validateEmail);
    inputUserName.addEventListener("blur", validateUsername);
    inputName.addEventListener("blur", validateName);
    inputLastName.addEventListener("blur", validateLastName);
    inputPassword.addEventListener("blur", validatePassword);
    // form.addEventListener("submit", submitEmail);
}





//Funciones

function alertClass(icon) {
    icon.classList.remove("bi-arrow-right");
    icon.classList.add("bi-x-lg");
    
}

function checkClass(icon){
    icon.classList.remove("bi-arrow-right");
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-check-lg");
}


function validateEmail(e) {
    valueEmail = e.target.value;

    switch(valueEmail.length > 0){

        case(!saveEmails.includes(valueEmail) && saveEmails != ""):
            if (e.target.type === "email") {
			
                if (er.test(e.target.value)) {
                    const error = d.querySelector(".alertMessage");
                    if(error){
                    error.remove();
                    checkClass(icon1);
                    }
                    checkClass(icon1);
                        
                } else {
                    
                    alertClass(icon1);
                    alertMessage("El correo no es válido");
                    }

                if(saveEmails == ""){
                    alertMessage("El correo no es válido");
                    alertClass(icon1);
                }
            }
            break;

        case(saveEmails == ""):
            alertMessage("El email no es válido");
            alertClass(icon1);
            break;

        case(saveEmails.includes(valueEmail)):
            alertMessage("Usted ya está registrado!");
            alertClass(icon1);
            break;
    }

    
}


function validateUsername(e){
    valueUsername = e.target.value;

    switch(valueUsername.length > 0){

        case(!saveUsernames.includes(valueUsername) && saveUsernames != ""):
            
            checkClass(icon2);
            const error = d.querySelector(".alertMessage");
                    if(error == "Ingrese nombre de usuario!" || error == "Usuario ya existe!"){
                    error.remove();
                    checkClass(icon2);
                    }
            break;

        case(saveUsernames == ""):
            alertMessage("Ingrese nombre de usuario!");
            alertClass(icon2);
            break;

        case (saveUsernames.includes(valueUsername)):
            alertMessage("Usuario ya existe!");
            alertClass(icon2);
            break;
    }
}

function validateName(e) {
    valueName = e.target.value;

    if(valueName != ""){
        checkClass(icon3);
        const error = d.querySelector(".alertMessage");
        if(error == "Ingrese su nombre"){
            error.remove();
        }
    } else {
        alertClass(icon3);
        alertMessage("Ingrese su nombre");
    }
}



function validateLastName(e) {
    valueLastName = e.target.value;

    if(valueLastName != ""){
        checkClass(icon4);
        const error = d.querySelector(".alertMessage");
        if(error == "Ingrese su apellido"){
            error.remove();
        }
    } else {
        alertClass(icon4);
        alertMessage("Ingrese su apellido");
    }
    
}

function validatePassword(e){
    valuePassword = e.target.value;

    if(valuePassword != ""){
        checkClass(icon5);
        const error = d.querySelector(".alertMessage");
        if(error == "Ingrese una constraseña"){
            error.remove();
        }
    } else {
        alertClass(icon5);
        alertMessage("Ingrese una constraseña");
    }
}


function alertMessage(message) {
    const errorMessage = d.createElement("p");
	errorMessage.textContent = message;
	errorMessage.classList.add("error","alertMessage");
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
    name += valueName;
    lastName += valueLastName;
    username += valueUsername;
    email += valueEmail;
    password += valuePassword;
    
    newUser = new User("participante",username,name,lastName,email,password );

    saveEmails.push(valueEmail);
    saveUsernames.push(valueUsername);
    
    addUsers();

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

console.log(team);