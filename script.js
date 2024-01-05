function obterIP() {
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-container').innerText = "Seu endereço IP é: " + data.ip;

            // Chama o backend PHP para salvar o IP no banco de dados
            salvarIPNoBanco(data.ip);
        })
        .catch(error => console.error('Erro ao obter IP:', error));
}

function salvarIPNoBanco(ip) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'saveip.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseText); // Exibe a resposta do servidor (pode ser removido em produção)
            } else {
                console.error('Erro ao salvar IP:', xhr.status, xhr.statusText);
            }
        }
    };

    xhr.send('ip=' + ip);
}