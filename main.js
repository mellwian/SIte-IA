const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você guiará Lyra em sua missão, respondendo a perguntas que influenciam o desenvolvimento da história. Escolha sabiamente! Ao sair da vila, Lyra encontra dois caminhos. Ela decide:",
        alternativas: [
            {
                texto: " Seguir pela floresta escura e misteriosa",
                afirmacao: "afirmacao"
            },
            {
                texto: "Tomar o caminho das colinas ensolaradas",
                afirmacao: "afirmacao"
            }
        ]
},
{
        enunciado: "Durante a jornada, Lyra encontra uma ponte quebrada sobre um rio. Ela:",
        alternativas: [
            {
                texto:  "Tenta consertar a ponte usando madeira próxima",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Busca uma forma de atravessar nadando",
                afirmacao: "afirmacao"
            }
        ]
        
    },
{
        enunciado: " No sopé da Montanha Sombria, Lyra encontra uma aldeia em ruínas. Ela:",
        alternativas: [
            {
                texto: "Investiga as ruínas em busca de sobreviventes ou pistas",
                afirmacao: "afirmacao"
            },
            {
                texto: "Segue diretamente para a montanha, priorizando o objetivo",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Ao confrontar Morthan, Lyra percebe um círculo mágico alimentando seu poder. Ela:",
        alternativas: [
            {
                texto: "Ataca diretamente Morthan, ignorando o círculo.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Destrói o círculo mágico primeiro",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Após derrotar Morthan, Lyra encontra o Cristal do Alvorecer. Ela:",
        alternativas: [
            {
                texto: "Usa o cristal para restaurar imediatamente a luz no reino",
                afirmacao: "afirmacao"
            },
            {
                texto: "Guarda o cristal para protegê-lo contra futuros perigos",
                afirmacao: "afirmacao"
            }
        ]
    }
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Independente das escolhas, Lyra triunfa sobre Morthan e salva o reino. Suas decisões moldam não apenas sua jornada, mas também o futuro de Solaria. Será ela lembrada como uma líder sábia ou uma guerreira destemida? Isso depende de você, jogador, refletir sobre suas escolhas.";
}

mostraPergunta();