/*3. Teniendo en cuenta el siguiente string: 'La casa es de color Blanco', hacer un
una función que modifique el color en el texto según los siguientes códigos: 1
= “Verde”, 2 = “Rojo”, 3 = “Amarillo” que se reciben como parámetro.
*/

function nuevaCadenaColor(codigo) {
    let i=0;
    let frase= 'La casa es de color blanco';
    let nuevaCadena=frase.slice(0,-6);
    if (codigo==1) {
        nuevaCadena=nuevaCadena+'verde';   
    }
    if (codigo==2) {
        nuevaCadena=nuevaCadena+'rojo';   
    }
    if (codigo==3) {
        nuevaCadena=nuevaCadena+'amarillo';   
    }
    if (codigo<1||codigo>3) {
        return `error en el codigo ingresado: ${codigo} no existe`
    }
    return nuevaCadena.trim()}

//let resultado= prompt("'La casa es de color Blanco'.Elija color:1= “Verde”, 2 = “Rojo”, 3 = “Amarillo”");    
let resultado= "4";
console.log(`Frase con nuevo color: ${nuevaCadenaColor(resultado)}`);