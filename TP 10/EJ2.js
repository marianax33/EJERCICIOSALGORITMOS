/*2. Escriba un script que lea una secuencia de caracteres terminada en “punto” e
informe la cantidad de letras 'f' leídas.
*/

let i=0;
let cantidad=0;
function cantidadCaracteres(frase) {
    while (frase[i] !=".") {
        if (frase[i]=="f" || frase[i]=="F"){
            cantidad++;
        }
        i++;
    }
    return "La frase: "+frase+" tiene "+cantidad+" letra F ";
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres("frase.");
console.log(resultado);