/*4. Hacer un script que permita leer una secuencia de caracteres terminada en
“punto” e informe la cantidad de palabras que tiene.
*/
let i=0;
let cantidad=0;
function cantidadCaracteres(frase) {
    while (frase[i] !=".") {
        while (frase[i] ==" ") {i++;}
        while (frase[i] !=" " && frase[i] !=".") {i++;}
        cantidad++;
    }
    return "La frase: "+frase+" tiene "+cantidad+" palabras ";
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres("  frvax vdvexad vada svae.");
console.log(resultado);