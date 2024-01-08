function calculateDays() {
    var hoursInput = document.getElementById("hours");
    var hours = parseFloat(hoursInput.value);

    var days = hours / 24;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `${hours} horas são equivalentes a ${days.toFixed(2)} dias.`;
}
