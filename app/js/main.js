import { getData } from "./getData.js";

// Creando la plataforma
const d        = document;
const userCard = d.getElementById("userCard");
const lastUser = JSON.parse(localStorage.getItem("lastUser"));

const [usuario] = lastUser;



//Creando un logo con los datos del usuario en el nav
const   dataUser = d.getElementById("dataUser"),
        iniciales   = d.createElement("p"),
        firstLetter = usuario.nombre.charAt(0),
        secondLetter = usuario.apellido.charAt(0);
iniciales.classList.add("data_user");
iniciales.innerHTML = `${firstLetter}${secondLetter}`;
dataUser.appendChild(iniciales);
/*   - * - * - * - * - * - * - * - * - * - * -   */


// Creando una modal dinámica para el usuario
const   wrapperDataUser = d.getElementById("wrapperDataUser"),   
        modal = d.getElementById("modalData");

wrapperDataUser.addEventListener("mouseover", ()=>{
    modal.style.display = "block";

    modal.addEventListener("mouseover", ()=>{
        modal.style.display = "block";
    })
})

wrapperDataUser.addEventListener("mouseout", ()=>{
    modal.style.display = "none";
    modal.addEventListener("mouseout", ()=>{
        modal.style.display = "none";
    })
})


//Creando cabecera de la modal
const   modalHeader = d.getElementById("modalHeader"),
        div2        = d.createElement("div"),
        div3        = d.createElement("div"),
        p           = d.createElement("p"),
        modalTitle = d.createElement("p"),
        modalEmail = d.createElement("p");

div2.classList.add("nombre_user","background_data");
p.classList.add("data_user");
p.style.fontSize = "1.15rem";
p.innerHTML = `${firstLetter}${secondLetter}`;
div2.appendChild(p);
modalHeader.appendChild(div2);

modalTitle.innerHTML = `${usuario.nombre} ${usuario.apellido}`;
modalTitle.classList.add("modal_title");
modalEmail.innerHTML = `${usuario.email}`;
modalEmail.classList.add("modal_email");
div3.appendChild(modalTitle);
div3.appendChild(modalEmail);
modalHeader.appendChild(div3);

//Agregando los desafíos dinamicamente al usuario
const   challenge = d.getElementById("challenge"),
        btnModalChallg1 = d.getElementById("btnModalChallg1"),
        btnModalChallg2 = d.getElementById("btnModalChallg2"),
        btnModalChallg3 = d.getElementById("btnModalChallg3");


        btnModalChallg1.addEventListener("click", ()=>{
            challenge.innerHTML = "Reserva de hora médica";
        });

        btnModalChallg2.addEventListener("click", ()=>{
            challenge.innerHTML = "Control de stock";
        });
        
        btnModalChallg3.addEventListener("click", ()=>{
            challenge.innerHTML = "Optimización de transporte";
        });

        // function addChallenge(message){
        //     challenge.innerHTML = message;
        // }

/*   - * - * - * - * - * - * - * - * - * - * -   */



//Bienvenida dinámica
const   welcome = d.getElementById("welcome"),
        txtWelcome      = d.createElement("p");
        txtWelcome.classList.add("mb-4")
        txtWelcome.innerHTML = 
            `Bienvenido <strong>${usuario.nombre}</strong>, elige uno de los desafíos para participar en la Hackaton Coderhouse 2022.<br>
            ¡Buena suerte!`;
        welcome.appendChild(txtWelcome);
