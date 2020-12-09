/*9. Hacer una función que permita completar una frase de dichos populares,
como por ejemplo “Quien madruga, Dios lo ayuda”. La función deberá recibir
dos parámetros, el primero es una parte de la frase, en el ejemplo es “Quien
madruga, ”, el segundo parámetro es un valor que ingresa el usuario para
completar la frase, en el caso concreto del ejemplo, sería “Dios lo ayuda”.
La función deberá retornar verdadero si la concatenación de ambos
parámetros es igual a la frase escogida.
*/

function verificar(frase1,frase2) {
    let i=0;
    fraseCompleta="Quien madruga, Dios lo ayuda";
    let frase1Mayus=frase1.toUpperCase();
    let frase2Mayus=frase2.toUpperCase();
        if (fraseCompleta.toUpperCase()==frase1Mayus+frase2Mayus) {   
        return `Verdadero`;
    }else{
        return `Falso`
    }
}
let resultado= verificar( 'Quien madruga, ', 'Dios lo ayuda');
//let resultado=verificar('Quien madruga, ',prompt('Completar: Quien madruga, '));
console.log(resultado);