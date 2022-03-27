// HACKATON CODERHOUSE 2022

// ESPECIFICACIONES:

// - El desafío estará enfocado en el registro de los usuarios.
// - Los usuarios pueden ser Jueces o Participantes.
// - Los jueces se registrarán con su nombre y el registro será personal. 
// - Los participantes se rergistrarán de forma grupal y obligatoriamente el grupo será de 4 integrantes.
// - Hay 2 opciones para el registro, 1 para ser parte del jurado y 2 para formar un equipo y concursar en la hackaton.
// - El algoritmo evaluará si dejo la casilla en blanco o escogió una opción diferente a 1 o 2.



// Declaración de Variables
let tipo = 0;
let juez = "";

//Declaración de Arrays
const equipo = [];



//Creación de Clases
class Usuario{
    constructor(tipo){
        this.tipo = tipo;
    }
}

//Creación de Funciones
function elegirTipo(){
    while(!tipo || tipo == 0 || tipo > 2){
        tipo = parseInt(prompt(`Ingrese el tipo de usuario:
        1 para Juez
        2 para Participante`));

        if(!tipo || tipo == 0 || tipo > 2){
            alert("ERROR - Digite  1 o 2, de acuerdo al tipo de usuario ");
        }
    }

    switch(tipo){
        case 1:
            juez += prompt("Ingrese Nombre:").toUpperCase();
            alert(`Bienvenid@! ${juez}, usted será parte del jurado en el Hackaton CoderHouse 2022`);
            break;

        case 2:
            for(let i=1; i<=2; i++){
                equipo.push(prompt(`Ingrese Nombre del participante ${i}:`).toUpperCase());
            }
            alert(`Bienvenid@s: \n \n ${equipo.join("\n")} \n \n Ustedes serán grupo del Hackaton Coderhouse 2022 `);
            
            break;
    }
    return new Usuario(tipo)
}

elegirTipo();
