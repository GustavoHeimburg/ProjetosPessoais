function obterIP() {
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-container').innerText = "Seu endereço IP é: " + data.ip;
        })
        .catch(error => console.error('Erro ao obter IP:', error));
}