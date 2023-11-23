let products = []; //matriz vacia
let probarato = [];

document.getElementById("botonGuardar").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const precio =  parseFloat(document.getElementById("precio").value);
    const comercio = document.getElementById("comercio").value;

    if(nombre && !isNaN(precio) && comercio){
        const objproducto = {nombre, precio ,comercio}; //creo un objeto con tales propiedades
        products.push(objproducto);
        document.getElementById("formProducto").reset(); //los campos se borran.
        alert("Producto guardado exitosamente.");
    }else{
        alert("Por favor, completa todos los campos correctamente.");
    }
});


document.getElementById("botonListar").addEventListener("click", ()=> {
    
    const listaCompleta = document.getElementById("listaProductos"); //obtenemos una referencia ubicacion del tbody
    listaCompleta.innerHTML = ""; //se limpia la tabla para mostrar los valores actualizados
    
    products.forEach(function(producto){
        
        const row = document.createElement("tr"); //crea un nuevo elemento de fila
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.comercio}</td>
        `;
        // agrega la fila a la tabla
        listaCompleta.appendChild(row); //la fila recién creada se agrega como un hijo del elemento,
    });
});

function encontrarProductosMasBaratos() {
    const productosUnicos = {}; // Objeto para almacenar productos únicos
    products.forEach((producto) =>{
        

        const nombre = producto.nombre;
        const precio =  producto.precio;
        const comercio = producto.comercio;

        // Si el producto aún no se ha agregado o si tiene un valor menor, actualizarlo

        // !productosUnicos[nombre]: si la propiedad con el nombre nombre no existe en el objeto productosUnicos. En otras palabras, esto verifica si el producto con el mismo nombre ya ha sido encontrado en iteraciones anteriores

        if (!productosUnicos[nombre] || precio < productosUnicos[nombre].precio) {
            productosUnicos[nombre] = { nombre, precio, comercio };
        }
    });
    // Convertir el objeto de productos únicos de nuevo a un array
    //Object.values(productosUnicos); se utiliza para convertir los valores de un objeto en un array.
    const resultado = Object.values(productosUnicos);

    return resultado;
};

document.getElementById("botonBaratos").addEventListener("click", ()=> {
const listaCompleta = document.getElementById("productosBaratos"); //obtenemos una referencia ubicacion del tbody
listaCompleta.innerHTML = ""; //se limpia la tabla para mostrar los valores actualizados

// Llamar a la función y mostrar los productos más baratos
const productosMasBaratos = encontrarProductosMasBaratos();
productosMasBaratos.forEach((producto) => {
    const row = document.createElement("tr"); //crea un nuevo elemento de fila
    row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.comercio}</td>
    `;
    // agrega la fila a la tabla
    listaCompleta.appendChild(row); //la fila recién creada se agrega como un hijo del elemento,
    //console.log(`Nombre: ${producto.nombre}, Valor: ${producto.precio} , Comercio:${producto.comercio} `);

});

});


