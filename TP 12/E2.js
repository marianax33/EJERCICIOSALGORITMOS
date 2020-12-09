/*2. Hacer una función que, dado un string y un carácter, devuelva una cadena de
caracteres con todas las palabras que comienzan y terminan con ese
caracter.
*/

function nuevaCadena(cadena,caracter) {
    let i=0;
    let nuevaCadena='';
    let cadenaMayus=cadena.toUpperCase();

    while (i<cadenaMayus.length) {
        while (cadenaMayus[i]==' ') {
            i++;
        }
        let nuevaPalabra='';
        while (cadenaMayus[i]!=' ' && i<cadenaMayus.length) {
            nuevaPalabra=nuevaPalabra+cadenaMayus[i];
            i++;
        }
        
        let longPalabra=nuevaPalabra.length;
        if (nuevaPalabra[0]==caracter.toUpperCase()) {
        
            if (nuevaPalabra[longPalabra-1]==caracter.toUpperCase()) {
                nuevaCadena=nuevaCadena+nuevaPalabra+' ';
            }
        }

        

    }
    if (nuevaCadena!='') {
        return `La nueva cadena con palabras que inician y finalizan con el caracter: '${caracter}' es: ${nuevaCadena.trim()}`;
        
    }else{
        return `En la cadena no hay palabras que inicien y terminen con el caracter: '${caracter}'`;
    }
    }

let resultado= nuevaCadena( '       Cadena     con               muchos  espacios     extras   ','c');
console.log(resultado);