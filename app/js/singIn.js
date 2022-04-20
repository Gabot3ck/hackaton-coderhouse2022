
const   d = document,
        loginForm   = d.getElementById("loginForm"),
        loginBtn    = d.getElementById("loginBtnSubmit");

        loginForm.addEventListener("submit",submitForm);


const newArray = [];

function submitForm(e) {
    e.preventDefault();
    const   loginUser = d.getElementById("loginUser").value,
            loginPassword = d.getElementById("loginPassword").value;
    let users = JSON.parse(localStorage.getItem(loginUser));
    
    if(users == null){
        alert("usuario no existe");
        loginForm.reset();
    } else{
        
        if(users.some(el => el.username == loginUser) && users.some(el => el.password == loginPassword)){
            newArray.push(users);
            console.log(newArray);
            // window.location = "plataforma.html";
            loginForm.reset();
        }else{
            alert("Contraseña incorrecta");
        }
    }
}


// Creando la plataforma
function userData(){
    const   loginUser = d.getElementById("loginUser").value,
            loginPassword = d.getElementById("loginPassword").value;
        
    users = JSON.parse(localStorage.getItem(loginUser));

    let profileUser = users.map(el => el.username == loginUser && el.password == loginPassword)

console.log(profileUser)

const userCard = d.getElementById("userCard");

const   div = d.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card">
                        <img src="../images/usuario.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${profileUser.username}</h5>
                            <p>Nombre:</p><span>${profileUser.name}</span><br>
                            <p>Apellido:</p><span>${profileUser.lastname}</span><br>
                            <p>Email:</p><span>${profileUser.email}</span>
                        </div>
                    </div>`;
userCard.appendChild(div);
}



//Email de recuperación de contraseña
const   loginPass = d.getElementById("loginPass"),
        btnPass   = d.getElementById("btnPass");

        btnPass.addEventListener("click", submitEmail);

        function submitEmail(e) {
            console.log("Hola Mundo");
            loginPass.classList.add("close");
            loginBtn.setAttribute("value","Enviar email");
        }

