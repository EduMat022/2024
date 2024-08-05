const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciados;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    
    const perguntas = [
        {
            enunciado: "O esporte ajuda na sustentabilidade de tradições?",
            alternativas: [
                {
                    texto: "Isso é assustador!",
                    afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
                },
                {
                    texto: "Isso é maravilhoso!",
                    afirmacao: "Quis saber como usar IA no seu dia a dia."
                }
            ]
        }