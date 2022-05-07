import { getData } from "./getData.js";

const   d = document,
        bntShow = d.getElementById("showDevs");


//Se importa la data de developers para trabajar con ellos
const   wrapperDevs = d.getElementById("wrapperDevs");
    wrapperDevs.innerHTML = "";
    const   users = await getData();
    const devs = users.filter(el => el.type === "developer");


    //Se muestran todos los usuarios developers dinamicamente
    bntShow.addEventListener("click", (e)=>{
        e.preventDefault()
        wrapperDevs.classList.add("wrapperDevs");
        devs.forEach(el => {
            const div = d.createElement("div");
            div.classList.add("card");
            div.setAttribute("id","cardDevs")
            div.innerHTML = `<img src="../images/usuario.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${el.name} ${el.lastName}</h5>
                                    <p class="card-text mb-3">email: ${el.email} </p>
                                    <a href="#" class="btn btn-warning btn-sm">Invitar</a>
                                </div>`
            wrapperDevs.appendChild(div);
        });
    })
