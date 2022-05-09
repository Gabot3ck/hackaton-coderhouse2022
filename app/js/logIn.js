
const   d = document,
        loginForm   = d.getElementById("loginForm"),
        loginBtn    = d.getElementById("loginBtnSubmit"),
        btnPassword     = d.getElementById("btnPassword");

        loginForm.addEventListener("submit",submitForm);




function submitForm(e) {
    e.preventDefault();


    const   loginEmail = d.getElementById("loginEmail").value,
            loginPassword = d.getElementById("loginPassword").value;

    //Se extra el usuario registrado desde Local Storage por medio de su email
    const users = JSON.parse(localStorage.getItem(loginEmail));
    
    //Se evalúa si el usuario está o no registrado
    if(users == null){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: '¡Usuario no registrado!',
            showConfirmButton: true,
        })
        loginForm.reset();

    } else{
        
        //Se evalúa que el email y contraseña coincidan para ingresar a la plataforma
        if(users.some(el => el.email == loginEmail) && users.some(el => el.password == loginPassword)){
            console.log(users);
            localStorage.setItem("lastUser",JSON.stringify(users));
            window.location = "plataforma.html";
            loginForm.reset();
            
        }else{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: '¡Contraseña Incorrecta!',
                showConfirmButton: true,
            })
        }
    }
}




// Email de recuperación de contraseña
btnPassword.addEventListener("click",()=>{
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
