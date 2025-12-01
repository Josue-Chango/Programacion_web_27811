var btn_temperatura = document.getElementById("btn_temperatura");
btn_temperatura.addEventListener("click", function (event) {
    let Cel = document.getElementById("txt_temperatura").value;
    let resultadoCelsius = document.getElementById("txt_resultado_temperatura_C");
    let resultadoFahrenheit = document.getElementById("txt_resultado_temperatura_F");

    let Far = (parseFloat(Cel) * (9 / 5)) + 32;
    let Celc = (parseFloat(Far) - 32) * (5 / 9);

    resultadoCelsius.innerHTML = 'Temperatura en Celsius: ' + Celc.toFixed(2) + ' C';
    resultadoFahrenheit.innerHTML = 'Temperatura en Fahrenheit: ' + Far.toFixed(2) + ' F';
});
