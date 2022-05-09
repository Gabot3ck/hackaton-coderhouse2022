import { alertClass, checkClass, alertMessage, er } from "./functions.js";
import { getData } from "../getData.js";

//Variables
const   d              = document,
        form           = d.getElementById("form"),
        inputEmail     = d.getElementById("email"),
        inputName      = d.getElementById("name"),
        inputLastName  = d.getElementById("lastName"),
        inputPassword  = d.getElementById("password"),
        btnForm        = d.getElementById("btnForm"),
        icon1          = d.getElementById("icon1"),
        icon3          = d.getElementById("icon3"),
        icon4          = d.getElementById("icon4"),
        icon5          = d.getElementById("icon5");


let valueEmail= "",
    valueName = "",
    valueLastName = "",
    valuePassword = "",
    name = "",
    lastName = "",
    email = "",
    password = "",
    newUser = "";


//Creación de Clases
class User{
    constructor(id,type,name,lastName,email,password){
        this.id   = id;
        this.tipo = type;
        this.nombre = name;
        this.apellido = lastName;
        this.email = email;
        this.password = password;
    }
}



// *********   E  V  E  N  T  O  S   ********* 
eventListeners();
function eventListeners(){
    inputEmail.addEventListener("blur",validateEmail);
    inputName.addEventListener("blur", validateName);
    inputLastName.addEventListener("blur", validateLastName);
    inputPassword.addEventListener("blur", validatePassword);
    form.addEventListener("submit", submit);
}





//// *********   F  U  N C  I  O  N  E  S   ********* 

//Función validar email al hacer un registro
function validateEmail(e) {
    valueEmail = e.target.value;

    switch(valueEmail.length > 0){

        case(!emailUsers.includes(valueEmail) && valueEmail != ""):
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

                if(valueEmail == ""){
                    alertMessage("El correo no es válido");
                    alertClass(icon1);
                }
            }
            break;

        case(valueEmail == ""):
            alertMessage("El email no es válido");
            alertClass(icon1);
            break;

        case(emailUsers.includes(valueEmail)):
            alertMessage("Usted ya está registrado!");
            alertClass(icon1);
            break;
    }
}


//Función validar inputs
function validate(icon,value,message){
    if(value != ""){
        checkClass(icon);
        activeBtn();
        addEventListener("DOMContentLoaded", ()=>{
            const error = d.querySelector(".alertMessage");
            if (error.value === message) {
            error.remove();
            }
        })
        
    } else {
        alertClass(icon);
        alertMessage(message);
    }
}

// Funciónpara validar input nombre
function validateName(e) {
    valueName = e.target.value;
    validate(icon3,valueName,"Ingrese su nombre");
}

// Funciónpara validar input apellido
function validateLastName(e) {
    valueLastName = e.target.value;
    validate(icon4,valueLastName,"Ingrese su Apellido");
}

// Funciónpara validar input contraseña
function validatePassword(e){
    valuePassword = e.target.value;
    validate(icon5,valuePassword,"Ingrese una constraseña");
}

//Función para activar el botón del formulario
function activeBtn(){
    if(er.test(valueEmail) &&  valuePassword !== ""  && valueName !== "" && valueLastName !== ""){
        btnForm.disabled = false;
        btnForm.classList.remove("bloqueado");
        btnForm.classList.add("activado");
        const error = d.querySelector("p.alertMessage");
        if(error){
            error.remove();
        }
    }
}

//Se crea Array para almacenar emails de los usuarios
const   users = await getData();
const   emailUsers = users.map(el => el.email);



// Creando el nuevo usuario y agregando al Local Storage
let emailLocal;

function submit(e) {
    e.preventDefault();
    name += valueName;
    lastName += valueLastName;
    email += valueEmail;
    password += valuePassword;
    
    newUser = new User(16,"developer",name,lastName,email,password );

    emailUsers.push(valueEmail);
    users.push(newUser);
    emailLocal = newUser.email;

    localStorage.setItem(emailLocal,JSON.stringify([newUser]));
    form.reset();
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro con éxito',
        showConfirmButton: false,
        timer: 1800
    })
    
}