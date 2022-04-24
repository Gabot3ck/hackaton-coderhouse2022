import {team, jury, totalTeam} from "./data/dbUsers.js";


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

    addEventListener("DOMContentLoaded", loadedApp);


    inputEmail.addEventListener("blur",validateEmail);
    inputUserName.addEventListener("blur", validateUsername);
    inputName.addEventListener("blur", validateName);
    inputLastName.addEventListener("blur", validateLastName);
    inputPassword.addEventListener("blur", validatePassword);
    form.addEventListener("submit", submit);
}





//Funciones

function loadedApp() {
    btnForm.disabled = true;
	btnForm.classList.add("bloqueado");
}

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
                    activeBtn()
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
            activeBtn();
            const error = d.querySelector(".alertMessage");
                    if(error.innerHTML == "Ingrese nombre de usuario!" || error.innerHTML == "Usuario ya existe!"){
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

function validate(icon,value,message){
    if(value != ""){
        checkClass(icon);
        activeBtn();
        const error = d.querySelector(".alertMessage");
        if(error.innerHTML === message){
            error.remove();
            // activeBtn();
        }
    } else {
        alertClass(icon);
        alertMessage(message);
    }
}


function validateName(e) {
    valueName = e.target.value;
    validate(icon3,valueName,"Ingrese su nombre");
}

function validateLastName(e) {
    valueLastName = e.target.value;
    validate(icon4,valueLastName,"Ingrese su Apellido");
}

function validatePassword(e){
    valuePassword = e.target.value;
    validate(icon5,valuePassword,"Ingrese una constraseña");
}


function activeBtn(){
    if(er.test(valueEmail) && valueUsername !== ""  &&  valuePassword !== ""  && valueName !== "" && valueLastName !== ""){
        btnForm.disabled = false;
        btnForm.classList.remove("bloqueado");
        btnForm.classList.add("activado");
        const error = d.querySelector("p.alertMessage");
        if(error){
            error.remove();
        }
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


let usernameLocal;
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

    usernameLocal = newUser.username;
    localStorage.setItem(usernameLocal,JSON.stringify([newUser]));
    form.reset();
    
    alert("Enviado!");
    // window.location = "plataforma.HTML"
    
}






console.log(team);