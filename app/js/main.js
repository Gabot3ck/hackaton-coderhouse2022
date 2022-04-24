// HACKATON CODERHOUSE 2022


// Creando la plataforma
const d        = document;
const userCard = d.getElementById("userCard");
const lastUser = JSON.parse(localStorage.getItem("lastUser"));

lastUser.forEach(element => {
    const   div = d.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card">
                        <img src="../images/usuario.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.username}</h5>
                            <p>Nombre:</p><span>${element.nombre}</span><br>
                            <p>Apellido:</p><span>${element.apellido}</span><br>
                            <p>Email:</p><span>${element.email}</span>
                        </div>
                    </div>`;
userCard.appendChild(div);
});

// console.log(lastUser);
// console.log(myUser);