/*1. Hacer una función que, dado un string o cadena de caracteres, genere una
nueva cadena con las mismas palabras pero no pueden haber espacios en
blanco antes de la primera palabra y después de la última. Y debe haber un
solo espacio en blanco entre palabras.
*/
function nuevaCadena(cadena) {
    let i=0;
    let cadenaSinEspacio='';

    while (i<cadena.length) {
        while (cadena[i]==' ') {
            i++;
        }
        let nuevaPalabra='';
        while (cadena[i]!=' ' && i<cadena.length) {
            nuevaPalabra=nuevaPalabra+cadena[i];
            i++;
        }
        cadenaSinEspacio=cadenaSinEspacio+nuevaPalabra+' ';

    }
    return cadenaSinEspacio.trim()}

let resultado= "       Cadena     con               muchos  espacios     extras   ";
console.log(`Nueva cadena sin espacios extras: ${nuevaCadena(resultado)}ver`);