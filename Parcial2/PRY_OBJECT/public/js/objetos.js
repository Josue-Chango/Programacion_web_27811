var btn_actualizar = document.getElementById('btn_actualizar');

var persona = {
    nombres: "JOSUE ANDEL",
    apellidos: "CHANGO PARRA",
    edad: 3,
    es_profesor: false,
    estatura: 1.70,
};

function mostrarDatos() {
    var datos_persona = document.getElementById('datos_persona');
    datos_persona.innerHTML = `
        <p>LA PERSONA SE LLAMA ${persona.nombres} ${persona.apellidos} 
        y su edad es ${persona.edad} y menciona que es ${persona.es_profesor ? 'sí' : 'no'} 
        profesor y su estatura es ${persona.estatura} m.</p>`;
}

function llenarFormulario() {
    var txt_nombres=document.getElementById('txt_nombres');
    txt_nombres.value = persona.nombres;
    var txt_apellidos = document.getElementById('txt_apellidos');
    txt_apellidos.value = persona.apellidos;
    var txt_edad = document.getElementById('txt_edad');
    txt_edad.value = persona.edad;
    
    var select_es_profesor = document.getElementById('select_es_profesor');
    select_es_profesor.value = persona.es_profesor ? 'si' : 'no';

    var txt_estatura = document.getElementById('txt_estatura');
    txt_estatura.value = persona.estatura;

    var check_mayor_edad = document.getElementById('check_mayor_edad');
    persona.edad >= 18 ? check_mayor_edad.checked = true :check_mayor_edad.checked = false;

}

llenarFormulario();
mostrarDatos();

btn_actualizar.addEventListener('click', function(e){
    persona.nombres = document.getElementById('txt_nombres').value;
    persona.apellidos = document.getElementById('txt_apellidos').value;
    persona.edad = parseInt(document.getElementById('txt_edad').value);
    persona.es_profesor = document.getElementById('select_es_profesor').value == 'si';
    persona.estatura = parseFloat(document.getElementById('txt_estatura').value);
    mostrarDatos();
    var check_mayor_edad = document.getElementById('check_mayor_edad');
    if (persona.edad >= 18) {
        check_mayor_edad.checked = true; 
    } else {
        check_mayor_edad.checked = false;
    }
    console.log(persona);
    llenarFormulario();
});
