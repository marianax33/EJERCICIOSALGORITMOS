/*5. Hacer una función que reciba una cadena de caracteres y analice: si
encuentra palabras que inicien con “a”, finalicen con “o” y cuya longitud sea
mayor a 5. En caso afirmativo, la función deberá devolver una nueva cadena
con esas palabras convertidas en mayúsculas.*/

function nuevaCadena(cadena) {
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
        
        if (nuevaPalabra.length>5) {
        
            if (nuevaPalabra[0]=='A' && nuevaPalabra[nuevaPalabra.length-1]=='O') {
                nuevaCadena=nuevaCadena+nuevaPalabra+' ';
            }
        }

        

    }
    if (nuevaCadena!='') {
        return `La nueva cadena con palabras que inician con 'A' y finalizan con el 'O': ' es: ${nuevaCadena.trim()}`;
        
    }else{
        return `En la cadena no hay palabras que inicien con 'A' y finalizan con el 'O'.`;
    }
    }

let resultado= nuevaCadena( 'cadena de caracteres para ser analizada');
console.log(resultado);