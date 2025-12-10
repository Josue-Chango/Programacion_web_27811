var seleccionado = document.querySelectorAll('input[name="color"]');
var txt_resultado = document.getElementById('txt_resultado');

function actualizarResultado(color) {
    if (color === 'rojo') {
        txt_resultado.textContent = 'DETENGASE ...!';
    } else if (color === 'amarillo') {
        txt_resultado.textContent = 'PRECAUCIÓN';
    } else if (color === 'verde') {
        txt_resultado.textContent = 'AVANCE';
    }
}

function verificar() {
    var colorSeleccionado = document.querySelector('input[name="color"]:checked');
    if (!colorSeleccionado) {
        txt_resultado.textContent = 'Seleccione un color del semáforo';
    } else {
        let color = colorSeleccionado.value;
        actualizarResultado(color);
    }
}

verificar();

seleccionado.forEach(function (e) {
    e.addEventListener('click', function () {
        verificar();
    });
});
