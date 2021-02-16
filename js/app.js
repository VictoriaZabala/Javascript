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
      
        <div class="tarjeta">
        <div class="imagen__producto">
          	<img src="${imagen}" class="imagen-producto">
          	</div>
            <h4>${nombre}</h4>
            <p class="precio">${precio}</p>
            <a href="#" class="agregar-carrito" data-id="${id}">Agregar al Carrito</a>
         
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
	const productoAgregado = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('h4').textContent,
		precio: producto.querySelector('.precio').textContent,
		id: producto.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}

	const existe = articulosCarrito.some(producto => producto.id == productoAgregado.id);

	if (existe) {
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
		articulosCarrito.push(productoAgregado);
	}


	insertarCarritoHTML();
	guardarStorage();

}

function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function insertarCarritoHTML() {

	/* Borro cont carrito */
	limpiarCarrito();

	/* Inserto productos de carrito en HTML */
	articulosCarrito.forEach(producto => {

		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width=100 height=100>
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
				<a href="#" class="borrar-producto" data-id="${id}"> x </a>
			</td>
		`

		contenedorCarrito.appendChild(row);
	});
}

function limpiarCarrito() {
	
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}