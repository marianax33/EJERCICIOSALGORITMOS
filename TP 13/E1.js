/*1. Considerando que se tiene un array de números (Por ej: [5,9,0,-5,9,7,63,...]).
Usted debe:
● Realizar una función que imprima la posición de aquellos números que
son iguales a 0.
● Realizar una función que imprima los números almacenados en las
componentes de índice impar.
● Realizar una función que retorne la posición en que se encuentra el
primer elemento negativo. Si no hay ningún componente negativo
deberá devolver 0.
● Realizar una función que reciba un valor N como parámetro y retorne
la cantidad de veces que aparece ese valor en el vector.
Nota: cada función recibe un vector cargado con 15 números (además de los
parámetros que se indican en cada caso).
*/

let vector=[5,9,0,5,9,7,63,0,15,-4,54,-14,1,57,0];

function posicionCero(numeros) {
    let pos='';
    for (index=0; index < numeros.length; index++) {
        if (numeros[index]==0){
            
            pos+=index+' ';
        }
    }
    return `Posición de números '0': ${pos}`;
}
function componenteImpar(numeros) {
    let posImpar='';
    for (let index = 0; index < numeros.length; index++) {
        if (index%2 !=0){
            posImpar+=numeros[index]+' ';
        }
    } 
    return `Contenido de los componentes impar: ${posImpar}`;
}


function negativos(numeros) {
    for (let index = 0; index < numeros.length; index++) {
       if (numeros[index] <0) {
        return `Posición primer negativo: ${index}`;       
       }
    }
    return '0 No hay negativos';
}
function cantidad(numeros,valor) {
    let ocurrencias=0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]==valor){
            ocurrencias++;
        }
    }
    return `Cantidad de ocurrencias que tiene el número ${valor}: ${ocurrencias}`;
}
let resultado=console.log(cantidad(vector,0));
let resultado1=console.log(negativos(vector));
let resultado2=console.log(posicionCero(vector));
let resultado3=console.log(componenteImpar(vector));