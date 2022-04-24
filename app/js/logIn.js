
const   d = document,
        loginForm   = d.getElementById("loginForm"),
        loginBtn    = d.getElementById("loginBtnSubmit"),
        btnPass     = d.getElementById("btnPass");

        loginForm.addEventListener("submit",submitForm);




export function submitForm(e) {
    e.preventDefault();

    const   loginUser = d.getElementById("loginUser").value,
            loginPassword = d.getElementById("loginPassword").value;
    const users = JSON.parse(localStorage.getItem(loginUser));
    
    if(users == null){
        alert("usuario no existe");
        
        loginForm.reset();
    } else{
        
        if(users.some(el => el.username == loginUser) && users.some(el => el.password == loginPassword)){
            console.log(users);
            // localStorage.setItem("lastUser",JSON.stringify(users));
            window.location = "plataforma.html";
            loginForm.reset();
        }else{
            alert("Contraseña incorrecta");
        }
    }
}




// Email de recuperación de contraseña
btnPass.addEventListener("click",()=>{
    (async () => {

        const { value: email } = await Swal.fire({
            title: 'Ingrese su dirección de email:',
            input: 'email',
            inputPlaceholder: 'ejemplo@email.com'
        })
        
        if (email) {
            Swal.fire(`Se envío un email a: ${email}`)
        }
        
        })()
});

