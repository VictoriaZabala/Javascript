const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito')
const listaProductos = document.querySelector('#lista-productos'); 
let articulosCarrito = [];
let stockProductos;



/*--------------Listeners--------------- */

	document.addEventListener('DOMContentLoaded', () => {
	$.ajax({
		url: 'js/productos.json',
		success: function (data, status, xhr) {
			stockProductos = data;
			cargarListaProductos(data);
	},
		error: function (xhr, status, errorThrown) {
			console.log(xhr)
			console.log(status)
			console.log(errorThrown)
	}
		});

	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [] ;

	insertarCarritoHTML();

	});


	$('#carrito').on('click', quitarProducto);

	$('#lista-productos').on('click', agregarProducto);

	btnVaciarCarrito.addEventListener('click', vaciarCarrito)





/*------------Funciones------------- */
function cargarListaProductos(productos) {
	$('#lista-productos').hide();
	productos.forEach((producto, index) => {

		const { nombre, imagen, precio, id } = producto;

		const divCard = document.createElement('div');
		divCard.classList.add('four', 'columns');
		divCard.innerHTML = `
			<div id="lista-productos" class="container">
			<div class="row">
			<div class="four columns">
				<div class="card">
					<img src="${imagen}" class="imagen-producto u-full-width">
					<div class="info-card">
						<h4>${nombre}</h4>
						<p class="precio">${precio}</p>
						<a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${id}">Agregar Al Carrito</a>
					</div>
				</div>
		`
		if (index % 3 === 0) {
			const row = document.createElement('div');
			row.classList.add('row');

			listaProductos.appendChild(row);
			row.appendChild(divCard);
		} else {
			const row = document.querySelector('#lista-productos .row:last-child');
			row.appendChild(divCard);
		}
	})

	$('#lista-productos').slideDown(1000)
	}



function vaciarCarrito(){
	limpiarCarrito();
	articulosCarrito = [];
	guardarStorage();
}

function quitarProducto(e) {
	if (e.target.classList.contains('borrar-producto')){
		let productoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter( producto => producto.id != productoId );
		//Renderizar el nuevo carrito
		insertarCarritoHTML();
		//Actualizar storage
		guardarStorage();
	}
}


function agregarProducto(e) {
	/*prevenir acción por default del enlace*/
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		/*seleccionar el card del producto*/
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

//---------Mapa---------- //
	var map = L.map('mapid').setView([-31.3292, -64.4908], 13);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);


	L.marker([-31.3292, -64.4908]).addTo(map)
    .bindPopup('Pawttery<br> Bialet Massé, Córdoba')
    .openPopup();
