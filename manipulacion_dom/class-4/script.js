const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

function btnOnClick(){
  //  console.log('Escuchando el evento de click');
    // console.log(input1.value + input2.value);
    // console.log(input1);

    const sumaInputs = input1.value + input2.value;
    resultado.innerText = "Resultado: " + sumaInputs;

}
