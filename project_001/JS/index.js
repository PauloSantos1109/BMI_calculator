let name, altura, peso, resultado, classificacao;
calcular = document.getElementById('calcular');

const img = {
  aprovado:'./img/positivo.png',
  desaprovado:'./img/negativo.png',
}
let imgHtml = document.getElementById('img')

function MBI(){
  name = document.getElementById('nome').value;
  altura = document.getElementById('altura').value;
  peso = document.getElementById('peso').value;
  resultado = document.getElementById('resultado');
  classificacao = "";
  
  if (name !== '' && altura !== '' && peso !== '') 
  resultado.textContent = `${name} seu IMC é ${bmiCalc(peso, altura)}`
    else resultado.textContent = 'Valores deve ser preenchidos'
  
}
/* calcular imc */
function bmiCalc(peso, altura){
  const valorIMC = (peso / (altura * altura)).toFixed(2);
  imgIndex(valorIMC);
  return valorIMC + " " +  analizingWeight(valorIMC);
}
const apro = () => imgHtml.src = img.aprovado;
const repro = () => imgHtml.src = img.desaprovado;


function imgIndex(valorIMC){
  if (valorIMC < 25 && valorIMC > 18.5) return apro()
  else return repro()
}
/* calcular imc */

function analizingWeight(valorIMC){
  if(valorIMC <18.5) classificacao = 'Abaixo do peso.';
    else if(valorIMC < 25) classificacao  =  'você esta com peso ideal. Parabéns!.';
    else if (valorIMC < 30) classificacao =  'Você esta levemente acima do peso.';
    else if (valorIMC < 35) classificacao = 'você esta com obesidade grau I.';
    else if (valorIMC < 40) classificacao = 'você esta com obesidade grau II.';
    else classificacao = 'você esta com obesidade grau III.';
  return classificacao;
}


calcular.addEventListener('click', MBI);




