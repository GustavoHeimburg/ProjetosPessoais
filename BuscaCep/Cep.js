function buscarCEP() {
    const cepInput = document.getElementById('cepInput');
    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('CEP inválido. Por favor, insira um CEP válido.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado. Por favor, verifique o CEP e tente novamente.');
            } else {
                exibirResultado(data);
            }
        })
        .catch(error => {
            console.error('Erro na busca de CEP:', error);
            alert('Ocorreu um erro na busca de CEP. Tente novamente mais tarde.');
        });
}

function exibirResultado(data) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
}