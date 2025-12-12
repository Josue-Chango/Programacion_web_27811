var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');
var txt_resultado = document.getElementById('txt_resultado');

btn_mostrar_tabla.addEventListener('click', function (event) {
    var numero1 = parseInt(document.getElementById('numero1').value);
    if (numero1) {
        let resp = "";
        var resultado = "";
        for (let i = 1; i <= 12; i++) {
            resp = `${numero1} ÷ ${i} = ${numero1 / i} <br>`;
            console.log(resp);
            resultado += resp;
        }
        txt_resultado.innerHTML = resultado;
    } else {
        txt_resultado.textContent = "Ingrese un número por favor";
    }
});

document.getElementById('btn_limpiar').addEventListener('click', function () {
    document.getElementById('numero1').value = '';
    txt_resultado.textContent = "";
});