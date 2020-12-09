/* 2. Pedir al usuario que ingrese el valor para la base y la altura de un triángulo, luego
calcular el área del mismo y mostrarlo en un mensaje. Tener en cuenta que los
valores solicitados son decimales y que la fórmula para calcular el área es:
(((base*altura))/2). Realizar esto por medio de una función. */

function area(b,h) {
    let a=((b*h)/2)
   
      return "El área del triángulo de base "+b+" y altura "+ h + " es " + a;
}

let base=prompt("Ingrese la base del triángulo");
let altura=prompt("Ingrese la altura del triángulo");
let resultado= area(base,altura);
//let resultado= area(5,15);
console.log(resultado);