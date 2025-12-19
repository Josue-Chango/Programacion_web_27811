var estudiantes = [
    { matricula: 101, nombre: "Juan Pérez" },
    { matricula: 102, nombre: "María Gómez" },
    { matricula: 103, nombre: "Carlos López" },
    { matricula: 104, nombre: "Ana Torres" },
    { matricula: 105, nombre: "Luis Rodríguez" },
    { matricula: 106, nombre: "Sofía Martínez" },
    { matricula: 107, nombre: "Pedro Sánchez" },
    { matricula: 108, nombre: "Lucía Herrera" },
    { matricula: 109, nombre: "Diego Castro" },
    { matricula: 110, nombre: "Valentina Mora" }
];

let asistencias = [];
var btnAgregar = document.getElementById('agregar');

function mostrarAsistencias() {
    var lista = document.getElementById('lista');
    var contador = document.getElementById('contador');
    lista.innerHTML = '';
    asistencias.forEach((estudiante, index) => {
        var li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `Matrícula: ${estudiante.matricula} - Nombre: ${estudiante.nombre}`;
        var botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function(a)  {
            eliminarAsistencia(index);
        });
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
    contador.textContent = `Total de estudiantes presentes: ${asistencias.length}`;
}

function eliminarAsistencia(index) {
    asistencias.splice(index, 1);
    mostrarAsistencias();
}

btnAgregar.addEventListener('click', function(b)  {
    var input = document.getElementById('nuevoElemento');
    var matriculaIngresada = parseInt(input.value.trim());
    if (isNaN(matriculaIngresada)) {
        alert('Ingrese una matrícula válida');
        return;
    }

    var estudianteEncontrado = estudiantes.find(
        est => est.matricula === matriculaIngresada
    );
    if (!estudianteEncontrado) {
        alert('Matrícula no encontrada');
        return;
    }
    var yaRegistrado = asistencias.some(
        est => est.matricula === matriculaIngresada
    );
    if (yaRegistrado) {
        alert('Este estudiante ya está registrado');
        return;
    }
    asistencias.push(estudianteEncontrado);
    mostrarAsistencias();
    input.value = '';
});

mostrarAsistencias();
