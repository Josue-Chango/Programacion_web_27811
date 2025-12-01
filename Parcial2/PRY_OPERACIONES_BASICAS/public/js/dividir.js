var btn_dividir = document.getElementById("btn_dividir");
btn_dividir.addEventListener("click", function (event) {
    let n1 = document.getElementById("txt_numero1_division").value;
    let n2 = document.getElementById("txt_numero2_division").value;
    txt_resultado_division = document.getElementById("txt_resultado_division");
    let resultado = parseFloat(n1) / parseFloat(n2);
    if (parseFloat(n2) != 0) {
        txt_resultado_division.innerHTML = resultado.toFixed(2);
    } else {
        txt_resultado_division.innerHTML = "Error: División por cero";
    }
});
