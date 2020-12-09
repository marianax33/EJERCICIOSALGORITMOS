/*3. Escribir una función que reciba un vector y un número “n” y lo retorne
cargado con los primeros 20 múltiplos del número n.
*/
let array=[];
function multiplos(vector, numero) {
    let multiplo='';
    for (let index = 0; index < 20; index++) {
        multiplo=numero*index
    //    console.log(multiplo);
       vector.push((multiplo));
    }
    return vector;
}
console.log(multiplos(array,2));