// var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');

// btn_mostrar_tabla.addEventListener('click', function (event) {
//     var numero1 = parseInt(document.getElementById('numero1').value);
//     if (numero1) {
//         let resp = "";
//         var resultado = "";
//         var pares = "";
//         var impares = "";
//         var resultado_par = "";
//         var resultado_impar = "";

//         for (let i = 1; i <= 12; i++) {

//             resp = `${numero1} x ${i} = ${numero1 * i} <br>`;
//             console.log(resp);
//             resultado += resp;
//             if ((parseInt(numero1 * i) % 2) == 0) {
//                 pares = `${numero1 * i} <br>`;
//                 resultado_par += pares;
//             } else {
//                 impares = `${numero1 * i} <br>`;
//                 resultado_impar += impares;
//             }
//         }
//         txt_resultado.innerHTML = resultado;
//         txt_resultado_pares.innerHTML = resultado_par;
//         txt_resultado_impares.innerHTML = resultado_impar;

//     } else {

//         txt_resultado.textContent = "Ingrese numero por favor";
//     }
// })
// document.getElementById('btn_limpiar').addEventListener('click', function () {
//     document.getElementById('numero1').value = '';
//     txt_resultado.textContent = "";
//     xt_resultado_pares.innerHTML = "";
//     txt_resultado_impares.innerHTML = "";
// })


var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');

btn_mostrar_tabla.addEventListener('click', function () {
    var numero1 = parseInt(document.getElementById('numero1').value);

    var colPares = document.getElementById('col_pares');
    var colImpares = document.getElementById('col_impares');

    if (numero1) {
        let pares = "";
        let impares = "";

        for (let i = 1; i <= numero1; i++) {

            if (i % 2 === 0) {
                pares += i + "<br>";
            } else {
                impares += i + "<br>";
            }
        }

        colPares.innerHTML = pares;
        colImpares.innerHTML = impares;

    } else {
        colPares.innerHTML = "";
        colImpares.innerHTML = "";
        alert("Ingrese un número por favor");
    }
});

document.getElementById('btn_limpiar').addEventListener('click', function () {
    document.getElementById('numero1').value = '';
    
    document.getElementById('col_pares').innerHTML = "";
    document.getElementById('col_impares').innerHTML = "";
});