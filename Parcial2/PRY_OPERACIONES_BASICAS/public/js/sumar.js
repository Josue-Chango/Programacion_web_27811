// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS LA LLAMADA
var btn_sumar = document.getElementById("btn_sumar");
//
btn_sumar.addEventListener("click", function (event) {

    //capturamos valores de entrada 
    let n1 = document.getElementById("txt_numero1").value;
    let n2 = document.getElementById("txt_numero2").value;

    txt_resultado_suma = document.getElementById("txt_resultado_suma");


    // se usa el innerhtml para mostrar el resultado
    txt_resultado_suma.innerHTML = parseFloat(n1) + parseFloat(n2);
    



});