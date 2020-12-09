/*9. Hacer un script que dado una cadena de caracteres genera una nueva
cadena con todas las palabras que comienzan con un carácter específico
ingresado por el usuario*/

function cantidadCaracteres(letra) {
     
    let i=0;
    let nuevaPalabra="";
    let nuevaFrase="";
    frase="amar ahorro camion aeropuerto aviar comun aura arriba partir andar ahorrar";
    let longitud=frase.length;

    for ( i == 0; i < longitud; i++) {
        
        while (frase[i] ==" ") {
            i++;
        }    
        if (frase[i]==letra || frase[i]==letra) {

            while ((frase[i]!=' ') && (i < longitud) ) {
                nuevaPalabra =  nuevaPalabra+frase[i];
                i++;
            }          

            nuevaPalabra=nuevaPalabra+" ";
      
        }else{
            if ((frase[i] !=" ") && (i<longitud)) {
                i++;
            }
        }
    }         
  return nuevaPalabra;
  
}

//let resultado= prompt("Ingresar letra");
let resultado=cantidadCaracteres("p");
console.log(resultado);