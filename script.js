const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Albert, Alex, Miguel, Mariana, Tiago, e Daniel são estudantes curiosos que descobriram um antigo mapa escondido na biblioteca da escola. O que eles devem fazer primeiro?",
        alternativas: [
            {
                texto: "Seguir o mapa imediatamente para ver onde ele leva.",
                afirmacao: "Os seis amigos decidem seguir o mapa sem perder tempo, acreditando que ele os levará a uma grande aventura."
            },
            {
                texto: "Investigar mais sobre a origem do mapa antes de partir.",
                afirmacao: "Os alunos optam por investigar a história do mapa, buscando mais informações antes de seguir qualquer pista."
            }
        ]
    },
    {
        enunciado: "No caminho, eles encontram uma bifurcação na floresta. Um lado parece seguro, mas o outro é misterioso e coberto de névoa. Qual caminho eles escolhem?",
        alternativas: [
            {
                texto: "Escolher o caminho seguro.",
                afirmacao: "O grupo decide que é mais prudente seguir pelo caminho seguro, evitando possíveis perigos."
            },
            {
                texto: "Escolher o caminho misterioso.",
                afirmacao: "Decididos a enfrentar qualquer desafio, os seis amigos escolhem o caminho misterioso, prontos para o que der e vier."
            }
        ]
    },
    {
        enunciado: "Enquanto seguem pelo caminho escolhido, ouvem um som estranho vindo de um arbusto próximo. O que fazem?",
        alternativas: [
            {
                texto: "Investigar o som para ver o que está causando.",
                afirmacao: "Corajosos, eles decidem investigar o som e descobrem um pequeno animal preso, que decidem ajudar."
            },
            {
                texto: "Ignorar o som e continuar andando.",
                afirmacao: "Optam por ignorar o som e continuar a missão, focados em encontrar o destino final."
            }
        ]
    },
    {
        enunciado: "Eles chegam a um velho portão enferrujado com uma inscrição enigmática. O que fazem?",
        alternativas: [
            {
                texto: "Tentar decifrar a inscrição antes de abrir o portão.",
                afirmacao: "Combinando seus conhecimentos, os seis amigos decifram a inscrição e descobrem uma senha para abrir o portão."
            },
            {
                texto: "Forçar o portão para entrar.",
                afirmacao: "Sem perder tempo, decidem forçar o portão, acreditando que podem lidar com qualquer coisa que vier pela frente."
            }
        ]
    },
    {
        enunciado: "Dentro do portão, eles encontram um velho baú trancado. Como abrir o baú?",
        alternativas: [
            {
                texto: "Procurar uma chave nas redondezas.",
                afirmacao: "Procuram por pistas ao redor e encontram uma chave escondida, que encaixa perfeitamente no baú."
            },
            {
                texto: "Usar uma ferramenta improvisada para arrombar o baú.",
                afirmacao: "Miguel improvisa uma ferramenta e consegue arrombar o baú, revelando seu conteúdo misterioso."
            }
        ]
    },
    {
        enunciado: "Finalmente, o baú se abre e dentro há um antigo artefato brilhante. O que devem fazer?",
        alternativas: [
            {
                texto: "Levar o artefato para o diretor da escola.",
                afirmacao: "Decidem que o melhor é entregar o artefato ao diretor, para que ele possa protegê-lo e estudá-lo com segurança."
            },
            {
                texto: "Esconder o artefato e manter o segredo entre eles.",
                afirmacao: "Prometem guardar o segredo e esconder o artefato, acreditando que podem descobrir mais sobre ele sozinhos."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
