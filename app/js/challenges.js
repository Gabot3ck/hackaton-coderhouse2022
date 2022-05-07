//Mostrar modal de los desafíos
const   d    = document,
        btn1 = d.getElementById("btnChallenge1"),
        btn2 = d.getElementById("btnChallenge2"),
        btn3 = d.getElementById("btnChallenge3"),

        messageChallenge1= `Se busca implementar un sistema de registro de horas médicas en donde el usuario pueda visualizar los diferentes servicios que brinda la clínica, como pueden ser imagen, laboratorio y consultas médicas. <br><br>
        Para ello el usuario debe registrarse en un formulario con los datos necesarios: documento de identidad, email, celular, nombre y apellido. <br><br>
        El usuario puede acceder a cualquier de estos servicios y dentro de ellos poder visualizar los subservicios, teniendo la opción de reservar una hora médica con día y hora correspondiente. <br><br>
        El sistema debe tener la opción de modificar o anular la hora médica si el usuario así lo necesite. <br>
        El usuario también puede tener la opción de consultar las horas médicas disponibles de acuerdo a un médico en particular. <br><br>
        Tener en cuenta que dos usuarios diferentes no pueden tener una misma reserva de hora médica. <br>
        Esta información debe ser enviada tanto al usuario y al profesional correspondiente encargado de brindar el servicio. <br><br>
        Para ello la clínica cuenta con una API donde están registrados los horarios, servicios, subservicios y profesionales de salud.
        <p class="text-center mt-3 fw-bold fs-6">¿Aceptas el desafío?</p>`,

        messageChallenge2= `Se busca implementar un dashboard para el  sistema de control de stock para una retail  del tipo minimarket.<br><br>
        Como proceso de mejora continua, la empresa está tratando de implementar la metodología "Just in time" para el stock de sus productos.<br>
        El objetivo de esta implementación está en solicitar la cantidad necesaria de los diferentes productos, teniendo en cuenta el flujo de venta, las fechas de entrega por parte de los proveedores,
        el margen de utilidad que daja cada producto.<br><br>
        La dashboard debe mostrar la cantidad de productos en bodega, las ventas por categorías, subcategorías y productos, generando alertas cuando el stock de algún producto esté por debajo del límite permitido de stock en bodega. <br><br>
        Se trabajará en conjunto con el equipo de IA el cual tiene generada la base de datos correspondiente para acceder a ella.

        <p class="text-center mt-3 fw-bold fs-6">¿Aceptas el desafío?</p>`,

        messageChallenge3= `Se busca implementar un sistema de optimización de rutas para el área de transportes de una e-commerce de ropa deportiva. <br><br>
        Los pedidos son recepcionados por el área de ventas con el cual se crea una data, siendo la entrega de los productos en un plazo de 24 horas. <br><br>
        Esta data se entrega al área de transportes para ser repartidos durante el transcurso del día. <br><br>
        La empresa necesita crear un sistema que indique la ruta más optima para su flota de transportes, el cual será supervisado por un controlador de rutas
        y este informará a los conductores las rutas correspondientes. <br><br>
        <p class="text-center mt-3 fw-bold fs-6">¿Aceptas el desafío?</p>`;

    btn1.addEventListener("click", modalChallenge(messageChallenge1,"modalBody1"));
    btn2.addEventListener("click", modalChallenge(messageChallenge2,"modalBody2"));
    btn3.addEventListener("click", modalChallenge(messageChallenge3,"modalBody3"));


    function modalChallenge(message,bodyChallenge){
        const modalBody = d.getElementById(bodyChallenge);
        const texto = d.createElement("p");
        texto.innerHTML = message;
        modalBody.appendChild(texto);
    }