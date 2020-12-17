function Producto(nombre,material,peso,colorPrincipal) {
	this.nombre = nombre;
	this.material = material;
	this. peso = peso;
	this.colorPrincipal = colorPrincipal;
}

if (confirm("Quiere ver la información detallada de los productos?")) {

const platoIrregular = new Producto("Plato Irregular","Cerámica","200gr","Celeste");
console.log(platoIrregular);

const bebedero = new Producto("Bebedero para perros y gatos","Cerámica","500gr","Gris");
console.log(bebedero);

const maceta = new Producto("Maceta Colgante","Cerámica","300gr","Blanco");
console.log(maceta);
}

else {
	console.log("Muchas gracias por visitar nuestra tienda!")
}





// Clase 4 let precio = Number(prompt("Ingrese el precio del producto que desea comprar: "));

// let cuotas = Number(prompt("Ingrese el número de cuotas en las que quiera pagar: "));

// function calculoCuotas(precio, cuotas) {
// 	return (precio/cuotas);
// }

// switch(cuotas) {
// default:
// 	alert(`Ingresó un número incorrecto, por favor, intente nuevamente`)
// 	break;
// case 1:
// 	alert(`Su cuota quedaría en $${precio}`)
// 	break;
// case 3:
// 	alert(`Las 3 cuotas quedarìan en $${calculoCuotas(precio, cuotas)} cada una.`)
// case 6:
// 	alert(`Las 6 cuotas quedarìan en $${calculoCuotas(precio, cuotas)} cada una.`)
// 	break;
// case 12:
// 	alert(`Las 12 cuotas quedarìan en $${calculoCuotas(precio, cuotas)} cada una.`)
// 	break;
// case 18:
// 	alert(`Las 18 cuotas quedarìan en $${calculoCuotas(precio, cuotas)} cada una.`)
// 	break;
// }













// CLASE 3 let i = 0

// while (i<=31){
// 	i++;

// 	if(i%2 == 0){
// 		console.log(`El día ${i} es un número par :)`)
// 	}
// 	else {
// 		console.log(`El día ${i} es un número impar :)`)
// 	}
// }




// for tiene que tener 3 condiciones, desde, hasta o mientras y la actualizacion del valor
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// let i = 0
// while (i < 10) {
// 	console.log (i);
// 	i++;
// }

// let i = 0;
// let condicion = true; 
// while (condicion) {
// 	if (i == 7) {
// 		condicion = false; 
// 	}
// 	console.log (i);
// 	i++;
// }

// let j = 5;
// let condicion = false;
// do {
// 	console.log (j);
// 	j++;
// } while (condicion);

// el continue lo que hace es terminar con la iterecion y no ejecuta el codigo siguiente y vuelve
// break termina el ciclo completo sale del for. muere ahì
// diferencia entre el while y el do while es que el while podrìa no ejecutarse nunca, mientras que el do while mìnicmo una vez se va a ejecutar. se ejecuta antes de preguntar el while.
































// Clase 2 let dineroEnBilletera = 600
// let frutilla = 250
// let naranja = 100 
// let manzana = 150

// if ( frutilla<=300 && naranja===100 && manzana<200 ) {
// console.log('Quiero un kilo de frutillas, un kilo de naranjas y un kilo de manzana, por favor') }

// else if (frutilla>300) {
// console.log('te agradezco, me llevo sólo la naranja y la manzana') }

// else if (naranja>200) {
// console.log('te agradezco, me llevo sólo la frutilla y la manzana')}

// else if (manzana>200) {
// console.log('te agradezco, me llevo sólo la frutilla y la naranja') } 

// else {
// console.log('Mejor voy a otra verduleria') }



//CLASE 1: var numero1 = parseInt(prompt("Ingrese el nùmero a dividir:"));
// var resultado = numero1 / 2;
// alert("El resultado es: " + resultado)

