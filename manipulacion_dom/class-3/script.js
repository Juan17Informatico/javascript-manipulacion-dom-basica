const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parrafote = document.querySelector('#parrafote');
const input = document.querySelector('input');
const h2 = document.querySelector('.verde');

console.log({
    h1,
    p,
    parrafito,
    parrafote
});

//Escribir HTML desde javascript

h1.innerHTML = 'Patito <br> Lindo'; //El metodo innerHTML convierte todo lo que le pasemos en elementos html
p.innerText = 'esto es un parrafo escrito desde javascript';// el elemento innerText simplemente recibe texto
//Attributes
//Get
console.log(h1.getAttribute('pantalla'));
console.log(h2.getAttribute('class'));
//set
h2.setAttribute('class', 'rojo');
//add
h2.classList.add('rojo');
h2.classList.remove('verde');
// h2.classList.toggle('verde'); ?
// h2.classList.contains('verde'); devuelve true o false, true si el atributo que pasamos por parametros si existe, false en caso contrario


//type inputs
input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', './paisaje-lindo.jpg');
parrafote.innerHTML = "";
parrafote.append(img); // ponemos el contenido de la imagén después del contenido del elemento HTMl del caso.


