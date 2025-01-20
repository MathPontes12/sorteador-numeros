function sortear() {
    let quantidade= parseInt(document.getElementById('quantidade').value); // pega o valor da caixa "quantidade" escolhido
    let de= parseInt(document.getElementById('de').value);                 // pega o valor da caixa "de" escolhido
    let ate= parseInt(document.getElementById('ate').value);               // pega o valor da caixa "ate" escolhido
    
    if (ate <= de) {

        alert('ERRO, intervalos irregulares!');         // Erro pra quando o valor "ate" for menor ou igual ao "de"
    return;
    }

    let sorteados= []    // cria um array pra incluir a quantidade de numeros sorteados
    for (let i = 0; i < quantidade; i++) {              // loop pra sortear um numero ate o valor maximo de "quantidade"
        let numero= sortearNumeros(de, ate);            // valor no intervalo "de" "ate"
        
        if (sorteados.includes(numero)) {               // se sortear um valor igual, ele sorteia de novo, pra n repetir os valores sorteados
            return (sortearNumeros());
        } else {
            sorteados.push(numero);
    }
    
    }
    let resultado= document.getElementById('resultado')
    resultado.innerHTML= (`<label class="texto__resultado">Números sorteados: ${sorteados} </label>`);
    alterarStatusBotao()
}
function sortearNumeros(min, max) {
return Math.floor(Math.random() * (max - min + 1))+ min;   // funçao pra sortear o valor com a formula matematica    
}

function alterarStatusBotao() {                                          //altera o status do botao de habilitado pra desabilitado depentendo da situaçao
    let botao= document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar() {                                    // quando clica em reiniciar altera esses valores (zera os campos; muda o status do botao)
    document.getElementById('quantidade').value= '';
    document.getElementById('de').value= '';
    document.getElementById('ate').value= '';
    document.getElementById('resultado').innerHTML= '<label class="texto__resultado">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
