/* 1. Pedir al usuario que ingrese dos valores enteros, y evalúe si son iguales o si son
diferentes, mostrar el resultado en un mensaje dependiendo del caso. Realizar esto
por medio de una función. */

function Igualdad(Entero1,Entero2) {
    let res;
    if (Entero1==Entero2) {
res="Los números "+Entero1+" y "+Entero2+ " son iguales.";
       return res; 
    }else{
        res="Los números "+Entero1+" y "+Entero2+ " son diferentes.";
      return res;
    }

}

let resultado= Igualdad(5,5);
console.log(resultado);