const numeroSenha = document.querySelector('parametro-senha_texto');
let tamanhosenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho{
    if(tamanhoSenha <i){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho{
    if(tamanhoSenha <20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}