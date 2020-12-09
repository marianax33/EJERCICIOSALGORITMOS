/*2. Hacer una función que permita contar la cantidad de veces que aparece una
palabra dentro de una cadena de caracteres. La cadena de caracteres,
terminada en punto, y la palabra buscada son ingresadas por el usuario.
*/


function cantidadCaracteres(cadena, palabra) {
     
    let i=0;
    let nuevaFrase="";
    let contarPalabra=0;

    while (cadena[i] !=".") {
        while (cadena[i] ==" ") {
            i++;
        }    
            while ((cadena[i]!=' ') && (cadena[i]!=".") ) {
                nuevaFrase =  nuevaFrase+cadena[i];
                i++;
            }          
            if (nuevaFrase==palabra) {
                contarPalabra++;
            }    
    nuevaFrase="";
        }
  return contarPalabra;
}

//let frase= prompt("Ingresar cadena");
//let palabra= prompt("Ingresar palabra a buscar");
//=let resultado=cantidadCaracteres(frase,palabra);
let resultado=cantidadCaracteres("  amar  ahorro  arriba    camion aeropuerto aviar comun aura arriba arriba andar ahorrar.  ","arriba");
console.log(resultado);