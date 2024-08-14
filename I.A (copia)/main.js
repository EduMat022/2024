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
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

    const perguntas = [
        {
            enunciado: "O futbol contribui na cultura?",
            alternativas: [
                {
                    texto: "Sim!",
                    afirmacao: "Ele pode ajudar com verbas e eventos"
                },
                {
                    texto: "Isso é maravilhoso!",
                    afirmacao: "Quis saber como usar IA no seu dia a dia."
                },
            ]
        ]

        function mostraAlternativas() {
            for(const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }