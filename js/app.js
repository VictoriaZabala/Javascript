// const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito')
// const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];



/* Listeners */
// listaProductos.addEventListener('click', agregarProducto);
$('#lista-productos').on('click', agregarProducto);


document.addEventListener('DOMContentLoaded', () => {
	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [] ;
	insertarCarritoHTML();
});


// carrito.addEventListener('click', quitarProducto);
$('#carrito').on('click', quitarProducto);


btnVaciarCarrito.addEventListener('click', vaciarCarrito)
/* Funciones */
function vaciarCarrito(){
	limpiarCarrito();
	articulosCarrito = [];
	guardarStorage();
}

function quitarProducto(e) {
	if (e.target.classList.contains('borrar-producto')){
		let productoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter( producto => producto.id != productoId );
		//Renderizar el nuevo carrito :)
		insertarCarritoHTML();
		//Actualizar storage
		guardarStorage();
	}
}




function agregarProducto(e) {
	/* Evitamos la accion por defecto del enlace */
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		/* Seleccionar el card del producto */
		const productoSeleccionado = e.target.parentElement.parentElement;

		obtenerDatos(productoSeleccionado);

	}
}

function obtenerDatos(producto) {

	/* Extraer informacion del producto */
	const productoAgregado = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('h4').textContent,
		precio: producto.querySelector('.precio').textContent,
		id: producto.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}

	/* Chequeo si el producto que agrego ya existe en el carrito */
	const existe = articulosCarrito.some(producto => producto.id == productoAgregado.id);

	if (existe) {
		/* Producto ya existente */
		const productos = articulosCarrito.map(producto => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				return producto;
			} else {
				return producto;
			}
		});
		articulosCarrito = [...productos];
	} else {
		/* Agrego el producto al carrito */
		articulosCarrito.push(productoAgregado);
	}

	insertarCarritoHTML();
	guardarStorage();
}

function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function insertarCarritoHTML() {

	/* Borrar contenido carrito */
	limpiarCarrito();

	/* Inserto los productos del carrito en el HTML */
	articulosCarrito.forEach(producto => {

		/* Destructuring sobre el producto */
		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width=100>
			</td>
			<td>
				${nombre}
			</td>
			<td>
				${precio}
			</td>
			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
		`

		contenedorCarrito.appendChild(row);
	});
}

function limpiarCarrito() {
	// contenedorCarrito.innerHTML = '';

	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}


var map = L.map('mapid').setView([-31.3292, -64.4908], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([-31.3292, -64.4908]).addTo(map)
    .bindPopup('Pawttery<br> Bialet Massé, Córdoba')
    .openPopup();