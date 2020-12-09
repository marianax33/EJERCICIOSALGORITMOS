/*3. Escriba un script que lea una secuencia de caracteres terminada en “punto” e
informe la cantidad de letras 'v' leídas seguidas por una 'a'.
*/

let i=0;
let cantidad=0;
function cantidadCaracteres(frase) {
    while (frase[i] !=".") {
        if (frase[i]=="v" || frase[i]=="V"){
            if (frase[i+1]=="a" || frase[i+1]=="A") {
                cantidad++;
            }
        }
        i++;
    }
    return "La frase: "+frase+" tiene "+cantidad+" va ";
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres("frvaxvdvexadvadasvae.");
console.log(resultado);