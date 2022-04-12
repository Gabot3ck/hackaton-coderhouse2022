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

import {equipo, jurado, totalEquipos} from "./dbUsuarios.js";


// Declaración de Variables
let tipo = 0;
let username = "";
let nombre = "";
let apellido = "";
let email = "";
const d = document;




//Creación de Clases
class Usuario{
    constructor(tipo,username,nombre,apellido,email){
        this.tipo = tipo;
        this.username = username;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}


//Creación de Funciones
function elegirTipo(){
        while(!tipo || tipo == 0 || tipo > 2){
            tipo = parseInt(prompt(`Ingrese el tipo de usuario:
            1 para Juez
            2 para Participante`));
    
            if(!tipo || tipo == 0 || tipo > 2){
                alert("ERROR - Digite  1 o 2, de acuerdo al tipo de usuario ");
            }
        }
    
        switch(tipo){
            case 1:
                tipo = "juez";
                username = buscarNickname().toUpperCase();
                nombre += prompt("Ingrese Nombre:").toUpperCase();
                apellido += prompt("Ingrese Apellido:").toUpperCase();
                email += prompt("Ingrese su email:").toUpperCase();
                // alert(`Bienvenid@! ${username}, usted será parte del jurado en el Hackaton CoderHouse 2022`);

                //Agregando una Card de Bootstrap con los datos ingresados para la opción 1
                let containerCardJurado = d.getElementById("containerJurado");
                let nuevaCard = d.createElement("div");

                nuevaCard.innerHTML = `
                    <div class="card h-100">
                        <img src="images/usuario.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${username}</h5>
                            <p>Nombre:</p><span>${nombre}</span><br>
                            <p>Apellido:</p><span>${apellido}</span><br>
                            <p>Email:</p><span>${email}</span>
                        </div>
                    </div>`;
                
                nuevaCard.classList.add("col");
                containerCardJurado.appendChild(nuevaCard);
                break;
    
            case 2:
                tipo = "participante";
                username = buscarNickname().toUpperCase();
                nombre += prompt("Ingrese Nombre:").toUpperCase();
                apellido += prompt("Ingrese Apellido:").toUpperCase();
                email += prompt("Ingrese su email:").toUpperCase();
                alert(`Bienvenid@s! \n${nicknameParticipantes.concat(username).join("\n")}\nustedes serán equipo del Hackaton Coderhouse 2022`);
                break;
        }

    nuevoUser = new Usuario(tipo,username,nombre,apellido,email);
}



const nicknameParticipantes = equipo.map(el => el.username);
const nicknameJurado = jurado.map(el => el.username);
const almacenarNickname = nicknameParticipantes.concat(nicknameJurado);


//Se va a evaluar si existe el nickname de un participante al inscribirse
function buscarNickname(){

    let nick = prompt("Ingresar nombre de usuario:");

    while (almacenarNickname.includes(nick)){

        alert("Error, el nickname ya existe");
        nick = prompt("Ingresar nombre de usuario:");
    };

    almacenarNickname.push(nick);
    return nick;
}


// Se crea un temporizador para correr el simulador
// setTimeout(() => {
//     elegirTipo();


//     //Se evalua de acuerdo al tipo de usuario si es juez o participante se le agrega a su array correspondiente
//     if(nuevoUser.tipo === "juez"){
//         jurado.push(nuevoUser);
//     } else {
//         participante = nuevoUser;
//         equipo.push(participante);
//     }
//     totalEquipos.push(equipo)
//     console.log(totalEquipos);
// }, 1200);




/*Reducción de velocidad de video de fondo*/
let video = document.querySelector('video');
video.defaultPlaybackRate = .3;
video.load();



/* Validación de formulario */

    //Variables
let inputEmail       = d.getElementById("email"),
    inputUsuario,
    btnContinuarForm = d.getElementById("btnContinuarForm"),
    formulario       = d.getElementById("formulario"),
    
    flechaHtml       = d.querySelector(".bi-arrow-right");

let validarEmail= "";
let validarUsername = "";


//Creando un Array para almacenar los emails
const emailParticipantes = equipo.map(el => el.email);
const emailJurado = jurado.map(el => el.email);
const almacenarEmail = emailParticipantes.concat(emailJurado);

//Creando Arrays para almacenar los usernames
const usernameParticipantes = equipo.map(el => el.username);
const usernameJurado = jurado.map(el => el.username);
const almacenarUsername = usernameParticipantes.concat(usernameJurado);


//Creando elementos
let flecha = d.createElement("i");
    flecha.classList.add("bi","bi-arrow-right","valido");

let check = d.createElement("i");
    check.classList.add("bi","bi-check","valido");

let div = d.createElement("div");




    //Eventos
btnContinuarForm.addEventListener("click",continuar);
// btnContinuarForm.addEventListener("click",continuar2);

inputEmail.addEventListener("change",e =>{
    validarEmail = e.target.value;
});





    //Funciones
function crearInput(frase,type,id,name) {
    div.innerHTML = `
        <label>Ingresar ${frase}:</label><br>
        <i class="bi bi-arrow-right valido"></i>
        <input type="${type}" id="${id}"  name="${name}"  class="form-control"  required><br>
        `;
}


function continuar(e){
    e.preventDefault();
    if(inputEmail != ""){
        validarInputs(almacenarEmail,validarEmail,"nombre de usuario","text","username","username");
        btnContinuarForm.before(div);

        setTimeout(() => {
            validarUsuario();
            console.log(validarUsername);
        }, 1000);
        
    }
    
    inputUsuario.addEventListener("change",e =>{
        validarUsername = e.target.value;
    });
    if(inputUsuario != ""){
        
        validarInputs(almacenarUsername,validarUsername,"apellido","text","apellido","apellido");
    }
    
}

function validarUsuario(){
    inputUsuario =   d.getElementById("username");
    inputUsuario.addEventListener("change",e =>{
        validarUsername = e.target.value;
    });
    console.log(inputUsuario)
}


// function continuar2(e) {
//     if(!almacenarUsername.includes(validarUsername)){

//         crearInput("apellido","text","apellido","apellido");
//         btnContinuarForm.before(div);

//     }else {
//         alert("El usuario ya está registrado");
//     }
// }

function validarInputs(arrayAlmacenado,varValidar,texto,type,id,name){
    if(!arrayAlmacenado.includes(varValidar)){
        crearInput(texto,type,id,name);
        
    } else {
        mensajeDeAlerta(`Su ${name} ya está registrado.`);
    }
}

function mensajeDeAlerta(mensaje){
    alert(mensaje);
}
