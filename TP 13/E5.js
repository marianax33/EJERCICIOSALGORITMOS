/*5. Realizar una función que permita cargar un array de 20 posiciones con
números enteros. Se debe retornar aquellas posiciones en las que el valor
contenido sea múltiplo de 3.*/

let array=[15,8,4,6,5,-5,25,4,0,26,84,-15,8,4,263,75,5,84,36,84];
function multiplos(vector) {
    let pos='';
    for (let index = 0; index < 20; index++) {
        if (vector[index]%3==0) {
            pos+=index+' ';
        }
    }
    return `Posiciones con múltiplos de 3: ${pos}`;
}
console.log(multiplos(array));