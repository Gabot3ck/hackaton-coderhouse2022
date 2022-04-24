/*Reducción de velocidad del video de fondo del formulario de registro*/

document.addEventListener('DOMContentLoaded',()=>{
    const   videoForm  = document.getElementById("videoForm");
    videoForm.defaultPlaybackRate = .3;
    videoForm.load();
});


