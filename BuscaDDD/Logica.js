async function findCity() {
    var dddInput = document.getElementById("dddInput");
    var ddd = dddInput.value;

    try {
        const response = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
        const data = await response.json();

        var resultElement = document.getElementById("result");
        if (data.city) {
            resultElement.innerHTML = `O DDD ${ddd} pertence à cidade de ${data.city}.`;
        } else {
            resultElement.innerHTML = `Não foi possível identificar a cidade para o DDD ${ddd}.`;
        }
    } catch (error) {
        console.error("Erro ao buscar informações do DDD:", error);
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = `Erro ao buscar informações do DDD ${ddd}.`;
    }
}
