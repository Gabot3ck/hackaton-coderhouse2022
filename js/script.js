// HACKATON CODERHOUSE 2022

// ESPECIFICACIONES:

// - El desafío estará enfocado en el registro de los usuarios.
// - Los usuarios pueden ser Jueces o Participantes.
// - Los jueces se registrarán su nickname, nombre, apellido y edad.
// - El único dato que no podrá repetirse entre los usuarios registrados será el nickname(único para cada uno).
// - Los participantes se rergistrarán de forma grupal y obligatoriamente el grupo será de 4 integrantes.
// - Por simulación ya existirá un grupo de 3 integrantes, faltando uno por registrarse.
// - Hay 2 opciones para el registro, 1 para ser parte del jurado y 2 para formar un equipo y concursar en la hackaton.
// - El algoritmo evaluará si dejó la casilla en blanco o escogió una opción diferente a 1 o 2.
// - El algoritmo evaluará si el nickname ingresado ya existe, de ser así el usuario está obligado a ingresar otro.
// - El array totalEquipos almacenará todos los arrays de los diferentes equipos.



// Declaración de Variables
let tipo = 0;
let nickname = "";
let nombre = "";
let apellido = "";
let edad = "";
let registro = "";



//Declaración de Arrays

const jurado = [
    {tipo: "juez",
    nickname: "ben",
    nombre: "Benjamin",
    apellido: "Torres",
    edad: 35}
];

const equipo = [
    {tipo: "participante",
    nickname: "warrior.net",
    nombre: "Julio",
    apellido: "Castro",
    edad: 28},

    {tipo: "participante",
    nickname: "furier",
    nombre: "Carlos",
    apellido: "Baeza",
    edad: 30},

    {tipo: "participante",
    nickname: "hugox",
    nombre: "Hugo",
    apellido: "Paredes",
    edad: 23}
];

const totalEquipos = [];




//Creación de Clases
class Usuario{
    constructor(tipo,nickname,nombre,apellido,edad){
        this.tipo = tipo;
        this.nickname = nickname;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
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
                tipo = "juez";
                nickname = buscarNickname().toUpperCase();
                nombre += prompt("Ingrese Nombre:").toUpperCase();
                apellido += prompt("Ingrese Apellido:").toUpperCase();
                edad += prompt("Ingrese su edad:").toUpperCase();
                alert(`Bienvenid@! ${nickname}, usted será parte del jurado en el Hackaton CoderHouse 2022`);
                break;
    
            case 2:
                tipo = "participante";
                nickname = buscarNickname().toUpperCase();
                nombre += prompt("Ingrese Nombre:").toUpperCase();
                apellido += prompt("Ingrese Apellido:").toUpperCase();
                edad += prompt("Ingrese su edad:").toUpperCase();
                alert(`Bienvenid@s! \n${nicknameParticipantes.concat(nickname).join("\n")}\nustedes serán equipo del Hackaton Coderhouse 2022`);
                break;
        }

    nuevoUser = new Usuario(tipo,nickname,nombre,apellido,edad);
}



const nicknameParticipantes = equipo.map(el => el.nickname);
const nicknameJurado = jurado.map(el => el.nickname);
const almacenarNickname = nicknameParticipantes.concat(nicknameJurado);

//Se muestra por consola el array de todos los nicknames
console.log("Se muestra el array de los nicknames existentes:\n");
console.log(almacenarNickname);



//Se va a evaluar si existe el nickname de un participante al inscribirse
function buscarNickname(){

    let nick = prompt("Ingresar nickname:");

    while (almacenarNickname.includes(nick)){

        alert("Error, el nickname ya existe");
        nick = prompt("Ingresar nickname:");
    };

    almacenarNickname.push(nick);
    return nick;
}


//Se crea un temporizador para correr el simulador
setTimeout(() => {
    elegirTipo();

    //Se evalua de acuerdo al tipo de usuario si es juez o participante se le agrega a su array correspondiente
    if(nuevoUser.tipo === "juez"){
        jurado.push(nuevoUser);
    } else {
        participante = nuevoUser;
        equipo.push(participante);
    }


    //Se vuelve a mostrar por consola el array de los nicknames con el nuevo nickname ingresado
    console.log("Se muestra el array de los nicknames incluyendo el del nuevo usuario:\n");
    console.log(almacenarNickname);

    totalEquipos.push(equipo)
    console.log(totalEquipos);
}, 1200);
