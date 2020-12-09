/*6. Hacer una función que reciba un string y una palabra y luego analice: si
encuentra esa palabra en el string, devolver una nueva cadena que diga
“Encontré la palabra en la posición xx”, reemplazando en “xx” la posición en
la que se encontró.
*/

function nuevaCadena(cadena,palabra) {
    let i=0;
    let palabraMayus=palabra.toUpperCase();
    let cadenaMayus=cadena.toUpperCase();
    let posicion=0;

    if (cadenaMayus.includes(' '+palabraMayus+' ')==true) {
        posicion=cadenaMayus.indexOf(' '+palabraMayus+' ');
        return `Encontré la palabra en la posición ${posicion+1}`;
    }else{
        return `La cadena no contiene la palabra ${palabra}`
    }
    

}
let resultado= nuevaCadena( 'cadena de caracteres para ser analizada','de');
console.log(resultado);
