
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se considera uma pessoa...",
        alternativas: [
            {
                texto: "Amorosa!",
                afirmacao: " "
            },
            {
                texto: "companheira!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual cor você mais gosta ?",
        alternativas: [
            {
                texto: "Rosa",
                afirmacao: ""
            },
            {
                texto: "Preto",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual seu sorvete favorito ?",
        alternativas: [
            {
                texto: "Morango",
                afirmacao: ""
            },
            {
                texto: "Chocolate",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual seria o lugar perfeito para o primeiro encontro ?",
        alternativas: [
            {
                texto: "Park de diversões",
                afirmacao: ""
            },
            {
                texto: "Cinema",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você gosta mais de que tipo de música ? ",
        alternativas: [
            {
                texto: "Trap",
                afirmacao: ""
            },
            {
                texto: "K-pop",
                afirmacao: ""
            }
        ]
    },
];


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
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Vocẽ não deveria confiar nesses sites não é saudável !!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
