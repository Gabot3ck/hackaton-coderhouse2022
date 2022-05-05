const   er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const   btnForm = document.getElementById("btnForm");


//Función que muestra ícono de error
function alertClass(icon) {
    icon.classList.remove("bi-arrow-right");
    icon.classList.add("bi-x-lg");
    
}


//Función que muestra ícono check
function checkClass(icon){
    icon.classList.remove("bi-arrow-right");
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-check-lg");
}


//Función que muestra mensaje de error en el formulario
function alertMessage(message) {
    const errorMessage = document.createElement("p");
	errorMessage.textContent = message;
	errorMessage.classList.add("error","alertMessage");
    const errors = document.querySelectorAll(".error");

    if (errors.length === 0){
        btnForm.before(errorMessage);
    }
}


//Función que bloquea el botón de formulario
function loadedApp() {
    btnForm.disabled = true;
	btnForm.classList.add("bloqueado");
}
document.addEventListener("DOMContentLoaded",loadedApp);



export {alertClass, checkClass, alertMessage, er}