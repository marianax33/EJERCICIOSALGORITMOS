/*1. Escriba un script que lea una secuencia de caracteres terminada en “punto” e
informe la cantidad de caracteres leídos.
*/
let i=0;
let cantidad=0;
function cantidadCaracteres(frase) {
    while (frase[i] !=".") {
        cantidad++;
        i++;
    }
    return "La frase: "+frase+" tiene "+cantidad+" caracteres ";
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres("frase.");
console.log(resultado);