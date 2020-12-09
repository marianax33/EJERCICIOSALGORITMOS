/*TP C - Ej. 4 - Item A
Implementar un módulo llamado procesar que permita obtener las ganancias definitivas obtenidas 
a lo largo del mes de enero si contamos con una matriz que contiene la lista de identificadores 
numéricos de productos (no se repiten - representado por el índice de la matriz - ), su precio 
unitario (expresado como un número entero) y la cantidad de ventas realizadas (también expresado 
como un número entero).
Se desea: Retornar (no se debe imprimir nada con console.log() ya que el interprete tomará estas
 salidas como diferentes al resultado esperado) un array con el subtotal calculado por cada 
 producto, teniendo en cuenta que este se calcula multiplicando el precio unitario por la cantidad.
ACLARACIÓN: USTED solo debe PROCESAR la matriz recibida como parámetro y devolver el VECTOR 
resultante. Las etapas de inicialización y cargado (rellenado) ya han sido programados por el 
equipo de cátedra.
Observar la cantidad de parámetros que recibe la función definida como procesar(...): */

function procesar(prod) {
    let resultado=[];
    let subTotal;
    for (let f = 0; f < prod.length; f++) {
     /* for (let c = 0; c < prod[f].length; c++) {
        subTotal=;
        }
       */ resultado[f]=prod[f][1]*prod[f][2];
    }
return resultado;
}






// Inicialización de las posiciones de la Matriz
let productos = new Array(31);
for (let i = 0; i < productos.length; i++) {
    productos[i] = new Array(3);
}

// Inicialización de la Matriz con valores random
productos =
[
  [ 0, 73, 752 ],  [ 1, 59, 546 ],
  [ 2, 98, 772 ],  [ 3, 82, 166 ],
  [ 4, 47, 514 ],  [ 5, 76, 522 ],
  [ 6, 59, 857 ],  [ 7, 66, 812 ],
  [ 8, 36, 943 ],  [ 9, 29, 487 ],
  [ 10, 45, 542 ], [ 11, 58, 333 ],
  [ 12, 86, 533 ], [ 13, 29, 222 ],
  [ 14, 84, 683 ], [ 15, 39, 752 ],
  [ 16, 66, 926 ], [ 17, 46, 948 ],
  [ 18, 12, 430 ], [ 19, 51, 719 ],
  [ 20, 51, 566 ], [ 21, 81, 420 ],
  [ 22, 97, 500 ], [ 23, 60, 485 ],
  [ 24, 45, 908 ], [ 25, 83, 537 ],
  [ 26, 44, 800 ], [ 27, 56, 902 ],
  [ 28, 60, 240 ], [ 29, 42, 58 ],
  [ 30, 84, 795 ]
]

console.log(procesar(productos));