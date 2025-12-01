var btn_multiplicar = document.getElementById("btn_multiplicar");
btn_multiplicar.addEventListener("click", function (event) {
    let n1 = document.getElementById("txt_numero1_multiplicacion").value;
    let n2 = document.getElementById("txt_numero2_multiplicacion").value;
    txt_resultado_multiplicacion = document.getElementById("txt_resultado_multiplicacion");
    txt_resultado_multiplicacion.innerHTML = parseFloat(n1) * parseFloat(n2);
});
