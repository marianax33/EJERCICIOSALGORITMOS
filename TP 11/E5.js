/*5. Hacer una función que reciba un string o cadena de caracteres terminada en
"#". Devolver la cantidad de palabras que cumplen todas las siguientes
condiciones:
a. Comienzan con “a”,
b. Terminan con “s” y
c. Tienen 5 caracteres de longitud.
*/

function cantidadCaracteres(frase) {
     
    let i=0;
    let contador=0;
    let fraseMayuscula=frase.toUpperCase();
    let nuevaPalabra="";
    let cantidad=0;
    
    while (fraseMayuscula[i] !="#") {
        
        while (fraseMayuscula[i] ==" ") {
            i++;
        }    

        if (fraseMayuscula[i]=="A") {            
               
            while ((fraseMayuscula[i] !=" ")&& (fraseMayuscula[i] !="#")) {
                contador++;
                nuevaPalabra=nuevaPalabra+fraseMayuscula[i];
                i++; 
            } 
            

        }else{i++;}

        if ((nuevaPalabra[contador-1]=="R")&& ((contador==5))){
            cantidad++;
        }
        nuevaPalabra="";
        contador=0;
    }         
  return frase+" tiene "+cantidad+" palabras que A...R con 5 caracteres.";
  
}

//let resultado= prompt("Ingresar letra");
let resultado=cantidadCaracteres("atuhr estamos agufr hacia la jaula de los monos la actor#");
console.log(resultado);