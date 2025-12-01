var btn_restar = document.getElementById("btn_restar");
btn_restar.addEventListener("click", function (event) {
    let n1 = document.getElementById("txt_numero1_resta").value;
    let n2 = document.getElementById("txt_numero2_resta").value;
    txt_resultado_resta = document.getElementById("txt_resultado_resta");
    txt_resultado_resta.innerHTML = parseFloat(n1) - parseFloat(n2);
});
