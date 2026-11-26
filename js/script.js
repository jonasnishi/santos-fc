
// Pega o formulário e o espaço do resultado
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// Quando o formulário for enviado
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    try {
        // Pega os valores digitados
        let gols = Number(document.getElementById("gols").value);
        let jogos = Number(document.getElementById("jogos").value);

        // Verifica se os campos estão vazios
        if (document.getElementById("gols").value === "" ||
            document.getElementById("jogos").value === "") {
            throw new Error("Preencha todos os campos!");
        }

        // Verifica se os números são válidos
        if (!Number.isInteger(gols) || !Number.isInteger(jogos) ||
            gols < 0 || jogos <= 0) {
            throw new Error("Digite números inteiros válidos!");
        }

        // Calcula a média de gols
        let media = gols / jogos;

        resultado.innerHTML = "Média de gols por jogo: " + media.toFixed(2);

    } catch (erro) {
        // Mostra a mensagem de erro
        resultado.innerHTML = erro.message;
    }
});

