/*8. Hacer un script que dado una cadena de caracteres genera una nueva
cadena con todas las palabras que comienzan con el caracter “A” y finalizan
con el caracter “R”.
*/

 //let frase="amar ahorro camion aeropuerto aviar comun aura arriba partir andar ahorrar";
 function cantidadCaracteres(frase) {
     
    let i=0;
    let nuevaPalabra="";
    let nuevaFrase="";
    let longitud=frase.length;
    let longitudNP=0;


    for ( i == 0; i < longitud; i++) {
        
        while (frase[i] ==" ") {
            i++;
        }    
        if (frase[i]=="a" || frase[i]=="A") {

            while ((frase[i]!=' ') && (i < longitud) ) {
                nuevaPalabra =  nuevaPalabra+frase[i];
                i++;
                longitudNP++;
            }          
            if (nuevaPalabra[longitudNP-1]=="r" ||nuevaPalabra[longitudNP-1]=="R") {
                nuevaFrase= nuevaFrase+nuevaPalabra+" ";
            }
            nuevaPalabra="";
            longitudNP=0;
        }else{
            if ((frase[i] !=" ") && (i<longitud)) {
                i++;
            }
        }
    }         
  return nuevaFrase;
  
}

//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres("amar ahorro camion aeropuerto aviar comun aura arriba partir andar ahorrar");
console.log(resultado);