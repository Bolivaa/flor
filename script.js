let acertos = 0;
const maxEstagios = 3;

// Lista simples de perguntas para o exemplo
const perguntas = [
    { q: "Quanto é 5 + 3?", r: 8, o: [8, 10] },
    { q: "Qual a cor das folhas da maioria das plantas?", r: "Verde", o: ["Azul", "Verde"] },
    { q: "O que a planta precisa para fazer fotossíntese?", r: "Luz do Sol", o: ["Luz do Sol", "Suco de laranja"] }
];

function verificarResposta(botaocerto) {
    if (botaocerto) {
        acertos++;
        atualizarPlanta();
    } else {
        alert("Resposta errada! Tente novamente.");
    }

    avancarPergunta();
}

function atualizarPlanta() {
    const caule = document.getElementById("caule");
    
    // Remove a classe anterior e adiciona o novo estágio
    caule.className = `estagio-${acertos}`;

    if (acertos === maxEstagios) {
        document.querySelector(".folhas").innerHTML = "🌸"; // A planta floresce no final!
        setTimeout(() => alert("Parabéns! Sua planta cresceu totalmente! 🎉"), 900);
    }
}

function avancarPergunta() {
    if (acertos < maxEstagios) {
        const pAtual = perguntas[acertos];
        document.getElementById("pergunta").innerText = pAtual.q;
        // Aqui você atualizaria os textos dos botões dinamicamente em um sistema real
    } else {
        document.getElementById("quiz-box").innerHTML = "<h3>Você venceu o desafio!</h3>";
    }
}
