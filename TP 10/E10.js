/*10.Hacer un script que dado una cadena de caracteres genera una nueva
cadena con todas las palabras que comienzan y finalizan con los caracteres
ingresados por el usuario.*/

function inicioFin(inicio,fin) {
     
    let i=0;
    let nuevaPalabra="";
    let nuevaFrase="";
    frase="amar ahorro camion aeropuerto aviar comun aura arriba partir andar ahorrar";
    let longitud=frase.length;

    for ( i == 0; i < longitud; i++) {
        
        while (frase[i] ==" ") {
            i++;
        }    
        if (frase[i]==inicio || frase[i]==inicio) {

            while ((frase[i]!=' ') && (i < longitud) ) {
                nuevaPalabra =  nuevaPalabra+frase[i];
                i++;
            }          
            if (nuevaPalabra[nuevaPalabra.length-1]=="r" ||nuevaPalabra[nuevaPalabra.length-1]=="R") {
                nuevaFrase= nuevaFrase+nuevaPalabra+" ";
            }
            nuevaPalabra="";
         //   nuevaPalabra=nuevaPalabra+" ";
      
        }else{
            if ((frase[i] !=" ") && (i<longitud)) {
                i++;
            }
        }
    }         
  return nuevaFrase;
  
}

//let resultado= prompt("Ingresar letra inicio");
//let resultado2= prompt("Ingresar letra final");
let resultado=inicioFin("a","r");
console.log(resultado);