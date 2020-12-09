/*8. Hacer una función que reciba como parámetro una frase y una palabra, la
función deberá devolver verdadero en caso de encontrar la palabra indicada,
dentro de la frase proporcionada, de lo contrario, devolverá falso. Suponer
que este comportamiento es el que se espera para un analizador de correo
spam.
*/


function nuevaCadena(cadena,palabra) {
    let i=0;
    let palabraMayus=palabra.toUpperCase();
    let cadenaMayus=cadena.toUpperCase();
        if (cadenaMayus.includes(' '+palabraMayus+' ')==true) {   
        return `Verdadero`;
    }else{
        return `Falso`
    }
}
let resultado= nuevaCadena( 'cadena de caracteres para ser analizada','de5');
console.log(resultado);
