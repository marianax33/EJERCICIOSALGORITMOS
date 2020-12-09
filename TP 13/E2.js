/*2. Escribir una función que permita cargar un vector de 10 elementos y los
imprima en orden inverso al de la carga.
*/
let array=[10,8,7,3,-5,4,6,52,48,52];
function Carga(vector) {
    for (let index = 0; index < 10; index++) {
        vector.push(prompt('Ingresar contenido de vector'));
    }
    let inversa='';
    for (let index = 9; index >= 0; index--) {
        inversa+=vector[index]+' ';
        
    }
    return inversa;
}

resultado=console.log(Carga(array));