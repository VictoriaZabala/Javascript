let comprar = document.querySelector('.btn btn-block btn-primary agregar_carrito'); 
let carrito = document.querySelector('#carrito');
let productos = document.querySelector('.producto');
let listaProductos = document.querySelector('#lista-carrito tbody')
const carro = new Carrito();
// let articulosCarrito = []
// const {imagen, nombre, precio, cantidad, id} = producto;

function cargarEventos() {
	productos.addEventListener('click', (e) => {carro.comprarProducto(e)} );
}
cargarEventos();


 function obtenerDatos(producto)  {
 	let productoAgregado = { 
 	imagen: producto.querySelector('img').src,
 	nombre: producto.querySelector('h5').textContent,
 	precio: producto.querySelector('h6').textContent,
 	id: producto.querySelector('a').getAttribute('data-id'),
 	cantidad: 1

 }

 articulosCarrito.push(productoAgregado)

 insertarCarritoHTML();
}



 // CARRITOOOOOOOOOOOOOO



function agregarProducto(e) {
	e.preventDefault();
	if(e.target.classList.contains('btn btn-block btn-primary agregar_carrito')){
		let producto = e.target.parentElement.parentElement;
		// this.obtenerDatos(producto)
		console.log(producto);
	}
}


//  function insertarCarritoHTML() {
//  	articulosCarrito.forEach( producto => {
//  		// se inserta en el tbody de la tabla
//  		const row = document.createElement('tr');
//  		row.innerHTML = `
//  		<td>
//  		<img src="${imagen}" width="50px">
//  		</td>

//  		<td>
//  		${nombre}
//  		</td>

//  		<td>
// 		${precio}
//  		</td>

//  		<td>
//  		${cantidad}
//  		</td>
 		
//  		<td>
//  		<a href= "#" class="borrar__producto" data-id="${id}"> X </a>
//  		</td>

//  		`
//  		contenedorCarrito.appendChild(row);
//  	})
//  }

// function limpiarCarrito () {
// 	while (contenedorCarrito.firstChild) {
// 		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
// 	}

// }




// tarjeta.addEventListener('click', agregarProducto);





















































































// let carrito = document.createElement('h1');
// let insertar = document.querySelector('#insert')

// if (confirm("¿Quiere agregar estos productos al carrito?")) {
// carrito.textContent = "¡Productos añadidos al carrito correctamente!";
// carrito.style.textAlign = 'center';
// carrito.style.backgroundColor = '#ddbdff';

// insertar.appendChild(carrito);

// }

// document.querySelector('.productos').remove();


// Clase 6 let carrito = ["Plato Irregular" , "Bebedero para perros y gatos" , "Maceta colgante"];

// if (confirm("¿Quiere agregar estos productos al carrito?")) {
//  console.log(`Los siguientes productos fueron agregados al carrito: `);

// }

// carrito.forEach(item => console.log(item));

// if (confirm(`¿Quiere eliminar ${carrito[1]} de su carrito?`)) {
// 	carrito.splice(1, 1);
// }
// console.log("--------------------------------")
// console.log("Su carrito ha sido actualizado: ")
//  carrito.forEach(item => console.log(item));