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
/*   - * - * - * - * - * - * - * - * - * - * -   */

//Bienvenida dinámica
const   welcome = d.getElementById("welcome"),
        txtWelcome      = d.createElement("p");
        txtWelcome.innerHTML = 
            `Bienvenido <strong>${usuario.nombre}</strong>, elige uno de los desafíos para participar en la Hackaton Coderhouse 2022.<br>
            ¡Buena suerte!`;
        welcome.appendChild(txtWelcome);

//Sección Developers
const   wrapperDevs = d.getElementById("wrapperDevs");
    wrapperDevs.innerHTML = "";
    const   users = await getData();
    users.forEach(el => {
        
        let li = d.createElement("li");
        if(el.type === "developer"){
            li.innerHTML = `${el.name} ${el.lastName}`;
        }
        

        wrapperDevs.appendChild(li);
    });

    console.log(users);

