console.log("Se cargo el archivo agregarProducto.js");

var btn_agregar = document.getElementById('btn_agregar');
var lista_productos = document.getElementById('lista_productos');

btn_agregar.addEventListener("click", function (event) {
    var nombre_producto = document.getElementById("txt_nombre_producto");

    if(nombre_producto.value != ''){

        var elementoLI = document.createElement('li');
        elementoLI.classList.add('list-group-item');
        elementoLI.textContent = nombre_producto.value;

        lista_productos.appendChild(elementoLI);
        

        //añadir a mi lista

        arreglos_productos.push(nombre_producto.value);
        nombre_producto.value = '';
       


    }else{
        console.log('POR FAVOR INGRESE UN PRODUCTO VALIDO')
    }

   var productos_mayusculas = arreglos_productos.map(function(producto){

        return producto.toUpperCase();

    })

    console.log(productos_mayusculas);
});