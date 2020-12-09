/*5. Hacer un script que permita contar la cantidad de palabras que tienen más de
tres caracteres.
*/


function cantidadCaracteres(frase) {
    let i=0;
    let cantidad=0;
    let contar=0;
    while (frase[i] !=".") {
    
        while (frase[i] ==" ") {i++;}

        while (frase[i] !=" " && frase[i] !=".") {
        contar++;
        i++;}

        if (contar>3) {cantidad++;}
        contar=0;
    }
    return "La frase: "+frase+" tiene "+cantidad+" palabras con mas de 3 letras";
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres("  15 616 5001 0 26 2 sffv.");
console.log(resultado);