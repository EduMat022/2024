
const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")

for(leti=0;i <botoes.length;i=++){
    botoes[i].onclick = function() {
        for(let j=0; j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2023-10-05T00:00:00);

contadores[0].textContent = calculadoraTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1){
    let tempoAtual = newDate();
    let tempoFinal = tempoObjetivo1-tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(hora/24);

    segundos % = 60;
    minutos % = 60;
    horas % = 24;
}