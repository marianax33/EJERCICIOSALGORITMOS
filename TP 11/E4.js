/*4. Hacer una función que dado un string o cadena de caracteres,terminada en
punto, determine la cantidad de diptongos que aparecen.
*/
function cantidadCaracteres(frase) {
     
    let i=0;
    let diptongo=0;
    let fraseMayuscula=frase.toUpperCase();

    while (fraseMayuscula[i] !=".") {
        
        while (fraseMayuscula[i] ==" ") {
            i++;
        }    
        if (fraseMayuscula[i]=="A" || fraseMayuscula[i]=="E"|| fraseMayuscula[i]=="I"|| fraseMayuscula[i]=="O"|| fraseMayuscula[i]=="U") {
            
            if(fraseMayuscula[i+1]=="A" || fraseMayuscula[i+1]=="E"|| fraseMayuscula[i+1]=="I"|| fraseMayuscula[i+1]=="O"|| fraseMayuscula[i+1]=="U") {
                diptongo++;
            }
            i++; 
        }else  {
                i++;
            }
        
    }         
  return frase+" tiene "+diptongo+" diptongos.";
  
}

//let resultado= prompt("Ingresar letra");
let resultado=cantidadCaracteres("Nos estamos dirigiendo hacia la jaula de los monos porque Manuel tiene muchas ganas de verlos.");
console.log(resultado);

