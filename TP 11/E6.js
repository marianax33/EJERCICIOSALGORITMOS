/*6. Hacer una función que reciba un string o cadena de caracteres. La secuencia
está dividida en oraciones que terminan en '.'. Para cada oración se pide
contar la cantidad de veces que aparece la subsecuencia 'TE'. Como
resultado se deberá retornar la cantidad de oraciones en las que la secuencia
ha aparecido más de dos (2) veces.*/


 function cantidadCaracteres(frase) {
   //let frase="atuhr estamos aguter haretecia la. jaula de los monos la actor.";
    let i=0;
    let contador=0;
    let contadorFrase=0;
    let fraseMayuscula=frase.toUpperCase();
    let longitud=frase.length;

        while (i < longitud) {
            
            while (fraseMayuscula[i] !=".") {
                
                while (fraseMayuscula[i] ==" ") {
                    i++;
                }    
                
                if (fraseMayuscula[i]=="T") {   
                             
                    i++;
                    if (fraseMayuscula[i]=="E") {
                        contador++;
                    }
                }else{i++;}

            }     
            if (contador>2) {
                contadorFrase++;
            }
            i++;   
            contador=0;
        }  
    return "en "+contadorFrase+ " frases aparece mas de 2 veces la subsecuencia TE.";
  
}

//let resultado= prompt("Ingresar letra");
let resultado=cantidadCaracteres("caceresmariana");
console.log(resultado);
