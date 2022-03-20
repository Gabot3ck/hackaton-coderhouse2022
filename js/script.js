
// HACKATON CODERHOUSE 2022

// ESPECIFICACIONES:

// - El desafío estará enfocado en el registro de los usuarios.
// - Los usuarios pueden ser Jueces o Participantes.
// - Los jueces se registrarán con su nombre y el registro será personal. 
// - Los participantes se rergistrarán de forma grupal y obligatoriamente el grupo será de 4 integrantes.
// - Hay 2 opciones para el registro, 1 para ser parte del jurado y 2 para formar un equipo y concursar en la hackaton.
// - El algoritmo evaluará si dejo la casilla en blanco o escogió una opción diferente a 1 o 2.



// Declaración de Variables

// let nombreParticipante = "",
//     nombreJuez = "",
//     usuario;
    


// //Declaración de funciones
// function registrar(){
//     usuario = parseInt(prompt(`Ingrese el tipo de usuario:
//     1 para Juez
//     2 para Participante`));
//     return usuario;
// }

// function errorVacio(){
//     while (!usuario){
//         alert("ERROR - No puede dejar la casilla vacía");
//         registrar();
//     }
// }


// registrar();


// // Evaluacíon de condiciones
// do{

//     if (!usuario){
//         errorVacio();

//     } else if (usuario == 1) {                                                              
//         nombreJuez += prompt("Ingrese Nombre:").toUpperCase();
//         alert(`Bienvenid@! ${nombreJuez}, usted será parte del jurado en el Hackaton CoderHouse 2022`);
//         break;

//     } else if (usuario == 2){
//         for(let i=1; i<=4; i++){
//             nombreParticipante  += prompt(`Ingrese Nombre del participante ${i}:`).toUpperCase() + "\n";
//         }
//         alert(`Bienvenid@s:\n ${nombreParticipante} ustedes serán grupo del Hackaton Coderhouse 2022 `);
//         break;

//     } else {                
//         alert("ERROR - Digite  1 o 2, de acuerdo al tipo de usuario ");
//         registrar();
//         errorVacio();
//     }

// } while(usuario);








// let usuario = prompt("Ingresa tu nombre:");
// let dinero;


// do{
//     dinero = prompt("Cuanto dinero tienes?")

//     if(dinero == ""){
//         alert("Debe ingresar unh monto");
//     }

//     if(dinero >= 1 && dinero <= 5){
//         alert("Te puedes comprar un pack de 6 cervezas" + " " + usuario);
//     }

//     if(dinero >=6 && dinero <= 15){
//         alert("Te puedes comprar un pack de 12 cervezas" + " " + usuario);
//     } 


// } while (dinero == "")