const calcular  = document.getElementById('calcular');


function imc () {
    const nome  = document.getElementById('nome').value;
    const altura  = document.getElementById('altura').value;
    const peso  = document.getElementById('peso').value; 
    const resultado  = document.getElementById('resultado');


    const img = document.getElementById('img')
    
    function addImgPosi (){
        img.src='.img/positivo.png'

    }
    function addImgNega (){
        img.src='.img/positivo.png'

    }
    

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        const img = document.getElementById('img')
    
        function addImgPosi (){
            img.src='./img/positivo.png'
    
        }
        function addImgNega (){
            img.src='./img/negativo.png'
    
        }

        let classificacao = "";
        if(valorIMC <18.5){
            classificacao = 'Abaixo do peso.';
            addImgNega();
        }else if(valorIMC < 25){
            classificacao  =  'você esta com peso ideal. Parabéns!.';
            addImgPosi();
        }else if (valorIMC < 30){
            classificacao =  'Você esta levemente acima do peso.';
            addImgNega();
        }else if (valorIMC < 35) {
            classificacao = 'você esta com obesidade grau I.';
            addImgNega();
        }else if (valorIMC < 40) {
            classificacao = 'você esta com obesidade grau II.';
            addImgNega();
        }else {
            classificacao = 'você esta com obesidade grau III.';
            addImgNega();
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    }else{
        resultado.textContent = 'Valores deve ser preenchidos'
    }
}


calcular.addEventListener('click', imc);

///////////////////////////////////////////////// mudança de img //////////////////////////////////



