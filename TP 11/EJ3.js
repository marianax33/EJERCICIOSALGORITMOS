/*3. Hacer una función que permita contar la cantidad de palabras de una cadena
de caracteres, terminada en punto, y devolver la longitud de la palabra más
larga que comienza con 'a'.
*/

function cantidadCaracteres(frase) {
     
    let i=0;
    let nuevaPalabra="";
    let longitudPalabraA=0;
   // frase="mar ahorro camion aeropuerto aviar comun aura arriba partir andar ahorrar.";
    let lonPalabraLarga=0;
    let PalabraLarga="";

    while (frase[i] !=".") {
        
        while (frase[i] ==" ") {
            i++;
        }    
        if (frase[i]=="a" || frase[i]=="A") {
            
            while ((frase[i]!=" ") && (frase[i] !=".") ) {
                nuevaPalabra =  nuevaPalabra + frase[i];
                i++;
                longitudPalabraA++;
            }          

            if (lonPalabraLarga < longitudPalabraA){
                PalabraLarga=nuevaPalabra;
                lonPalabraLarga=longitudPalabraA;
            }
            nuevaPalabra="";
            longitudPalabraA=0;
        }
            
            if ((frase[i] !=" ") && (frase[i] !=".")) {
                i++;
            }
        
    }         
  return PalabraLarga+" tiene una longitud de "+lonPalabraLarga+" caracteres.";
  
}

//let resultado= prompt("Ingresar letra");
let resultado=cantidadCaracteres("amariamooos ahorro camion aeropuerto aviar comun aura arriba partir andar ahorrar.");
console.log(resultado);