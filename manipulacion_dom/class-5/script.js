const form = document.querySelector('#form')
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')

//Add event listener

form.addEventListener('submit', sumarInputValues)

function sumarInputValues() {
  const sumaInputs = input1.value + input2.value;
  resultado.innerText = 'Resultado: ' + sumaInputs;
}
