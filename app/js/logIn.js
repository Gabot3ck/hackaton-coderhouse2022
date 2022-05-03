
const   d = document,
        loginForm   = d.getElementById("loginForm"),
        loginBtn    = d.getElementById("loginBtnSubmit"),
        btnPass     = d.getElementById("btnPass");

        loginForm.addEventListener("submit",submitForm);




export function submitForm(e) {
    e.preventDefault();

    const   loginEmail = d.getElementById("loginEmail").value,
            loginPassword = d.getElementById("loginPassword").value;
    const users = JSON.parse(localStorage.getItem(loginEmail));
    
    if(users == null){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: '¡Usuario no existe!',
            showConfirmButton: true,
        })
        loginForm.reset();
    } else{
        
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




// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data));

