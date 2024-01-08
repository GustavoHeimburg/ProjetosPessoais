function calcularInvestimento() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const taxaRendimento = parseFloat(document.getElementById('taxaRendimento').value) / 100;
    const prazo = parseInt(document.getElementById('prazo').value);
    const unidadeTempo = document.getElementById('unidadeTempo').value;

    let rendimento = 0;

    if (unidadeTempo === 'meses') {
        rendimento = valorInicial * Math.pow(1 + taxaRendimento / 12, prazo) - valorInicial;
    } else if (unidadeTempo === 'anos') {
        rendimento = valorInicial * Math.pow(1 + taxaRendimento, prazo) - valorInicial;
    }

    const resultadoSemInvestir = valorInicial;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Resultado sem Investir:</strong> R$ ${resultadoSemInvestir.toFixed(2)}</p>
        <p><strong>Rendimento Total:</strong> R$ ${rendimento.toFixed(2)}</p>
        <p><strong>Valor Final:</strong> R$ ${(valorInicial + rendimento).toFixed(2)}</p>
    `;
}
