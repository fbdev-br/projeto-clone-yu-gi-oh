const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

setaAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;
    removerSelecionadoCartao();
    cartaoAtual++;
    addSelecionadoCartao();
});

setaVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return; 
    removerSelecionadoCartao();
    cartaoAtual--;
    addSelecionadoCartao();
});

function addSelecionadoCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function removerSelecionadoCartao() {
    cartoes[cartaoAtual].classList.remove('selecionado');
}

