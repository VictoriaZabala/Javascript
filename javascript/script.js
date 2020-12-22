let carrito = ["Plato Irregular" , "Bebedero para perros y gatos" , "Maceta colgante"];

if (confirm("¿Quiere agregar estos productos al carrito?")) {
 console.log(`Los siguientes productos fueron agregados al carrito: `);

}

carrito.forEach(item => console.log(item));

if (confirm(`¿Quiere eliminar ${carrito[1]} de su carrito?`)) {
	carrito.splice(1, 1);
}
console.log("--------------------------------")
console.log("Su carrito ha sido actualizado: ")
 carrito.forEach(item => console.log(item));