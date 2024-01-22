function gerarSenha() {
    const senhaAleatoria = Math.floor(Math.random() * 100000).toString().substring(0, 5);

    const senhaHash = CryptoJS.SHA256(senhaAleatoria).toString(CryptoJS.enc.Hex);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
                <p>Senha Gerada: ${senhaAleatoria}</p>
                <p>Hash SHA-256: ${senhaHash}</p>
            `;
}