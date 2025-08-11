let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial ();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'tentativa';
    let mensagemTentativa =`Você descobriu o numero secreto. Com ${palavraTentativa} ${tentativas}`;
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1' , 'Acertou')
        exibirTextoNaTela('p' , mensagemTentativa )
        document.getElementById('reiniciar').removeAttribute('disabled');
        limparCampo();
    }else{
        if(chute > numeroSecreto){
             exibirTextoNaTela('p' , 'O numero Secreto é menor')
        } else{
             exibirTextoNaTela('p' , 'O numero Secreto é maior')
        }
        tentativas++;
        limparCampo();
    }

}
function mensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 50 + 1);
    let quantidadeDeElementoLista = listaNumerosSorteados.length;
    if(quantidadeDeElementoLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log (listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}












