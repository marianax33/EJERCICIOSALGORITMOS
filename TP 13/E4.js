/*4. Debe modificarse el desarrollo del punto anterior para permitir:
● Cargar un array con x múltiplos del número n, siendo que x y n son
valores que ingresa el usuario por teclado. Se deben imprimir los
valores calculados.
● Repetir el proceso hasta que el usuario ingrese 0 para la cantidad de
múltiplos a generar, es decir, cuando x = 0.
*/

let array=[];
function multiplos(vector) {
    let x=prompt('ingresar cantidad de múltiplos a calcular'); //Cantidad de múltiplos
    let n=prompt('ingresar un número para calcular sus múltiplos'); ; //número
    for (let index = 0; index < x; index++) {
        multiplo=n*index
    //    console.log(multiplo);
       vector.push((multiplo));
    }
    return vector;
}
console.log(multiplos(array));
