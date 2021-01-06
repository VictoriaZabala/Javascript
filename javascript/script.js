let comprar = document.querySelector('.btn btn-block btn-primary agregar_carrito'); 
let carrito = document.querySelector('#carrito');
let productos = document.querySelector('.tarjeta');
let listaProductos = document.querySelector('#lista-carrito tbody')

 // CARRITOOOOOOOOOOOOOO

class Carrito{
	comprarProducto(e) {
	e.preventDefault();
	if(e.target.classList.contains('agregar_carrito')) {
		let producto = e.target.parentElement.parentElement;
		this.obtenerDatos(producto)
		}
	}

	obtenerDatos(producto)  {
 	let productoAgregado = { 
 		imagen: producto.querySelector('img').src,
 		nombre: producto.querySelector('h5').textContent,
 		precio: producto.querySelector('h6').textContent,
 		id: producto.querySelector('a').getAttribute('data-id'),
 		cantidad: 1
		}
		this.insertarCarrito(productoAgregado);
	}

	insertarCarrito() {
		articulosCarrito.forEach( producto => {
 		
 		const row = document.createElement('tr');
 		row.innerHTML = `
 		<td>
 		<img src="${imagen}" width="50px">
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
 		<a href= "#" class="borrar__producto fas fa-times-circle" data-id="${id}"></a>
 		</td>

 		`
 		listaProductos.appendChild(row);
 	})


function cargarEventos() {
	productos.addEventListener('click', (e) => {carro.comprarProducto(e)} );
}

let carro = new Carrito();
cargarEventos();
}
}



