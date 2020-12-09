/*' 7. Hacer una función que reciba como parámetro una cadena de texto, la
función deberá retornar verdadero (true) en caso de que la cadena ingresada
sea un palíndromo, es decir, si se lee de la misma forma desde la izquierda y
desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro
paso natural". En caso contrario, deberá devolver falso. No se toman en
cuenta las tildes para el análisis.
'*/


function palindromos(cadena) {
    let i=0;
    let cadenaMayus=cadena.toUpperCase();
    let nuevaCadena='';
    let cadenaReversa='';

    while (i<cadenaMayus.length) {
        while (cadenaMayus[i]==' ') {
            i++;
        }
        while (cadenaMayus[i]!=' ' && i<cadenaMayus.length) {
            nuevaCadena=nuevaCadena+cadenaMayus[i];
            i++;
        }   
    }
    i=nuevaCadena.length;
    while (i>0) {
        cadenaReversa=cadenaReversa+nuevaCadena[i-1];
        i--;
    }
    if (nuevaCadena==cadenaReversa) {
        return "true";
    }else{
        return "false";
    }
}
    
let resultado= palindromos( 'Otro pone oro en opsorto');
console.log(resultado);