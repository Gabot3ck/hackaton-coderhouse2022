

// Creando la plataforma
const d        = document;
const userCard = d.getElementById("userCard");
const lastUser = JSON.parse(localStorage.getItem("lastUser"));

const [usuario] = lastUser;


const   dataUser = d.getElementById("dataUser"),
        iniciales   = d.createElement("p"),
        firstLetter = usuario.nombre.charAt(0),
        secondLetter = usuario.apellido.charAt(0);

iniciales.classList.add("data_user");
iniciales.innerHTML = `${firstLetter}${secondLetter}`;
dataUser.appendChild(iniciales);



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
