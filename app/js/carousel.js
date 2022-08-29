let carousel = document.getElementById("carousel");
let width = 300; // ancho de las imágenes
let count = 1; // conteo de las imágenes visibles

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // posición del desplazamiento del carrete

carousel.querySelector('.prev').onclick = function() {
  // desplazamiento izquierdo
    position += width * count;
  // no podemos mover demasiado a la izquierda, se acaban las imágenes
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // desplazamiento derecho
    position -= width * count;
  // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};