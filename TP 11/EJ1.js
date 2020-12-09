/*1. Hacer una función que dado un string o cadena de caracteres, terminada en
punto, genere una nueva cadena con las mismas palabras pero no pueden
haber espacios en blanco antes de la primera palabra y después de la última.
Y debe haber un solo espacio en blanco entre palabras.
*/


function cantidadCaracteres(frase) {
     
    let i=0;
    let nuevaFrase="";


    while (frase[i] !=".") {
          
        while (frase[i] ==" ") {
            i++;
        }    
            while ((frase[i]!=' ') && (frase[i]!=".") ) {
                nuevaFrase =  nuevaFrase+frase[i];
                i++;
            }          
            if (frase[i]!=".") {
                nuevaFrase=nuevaFrase+" ";
            }else {
                nuevaFrase =  nuevaFrase+frase[i];}         
    
        }    

  return nuevaFrase;
  
}

//let resultado= prompt("Ingresar letra");
let resultado=cantidadCaracteres("  amar  ahorro      camion aeropuerto aviar comun aura arriba partir andar ahorrar.  ");
console.log(resultado);