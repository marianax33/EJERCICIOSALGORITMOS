/*6. Hacer un programa que permita contar la cantidad de palabras que
comienzan con “P” de una cadena de caracteres*/


function cantidadCaracteres(frase) {
    let i=0;
    let cantidad=0;
    let longitud=frase.length;
    if (frase[0]=="p" || frase[0]=="P") {
        cantidad++;        
    }
    for ( i == 0; i < longitud; i++) {
        while (frase[i] ==" ") {
            if (frase[i+1]=="p" || frase[i+1]=="P") {
                cantidad++; 
            }
            i++;
        }   
   }
   return cantidad +" palabras empiezan con P";
  
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres(" pkkjhkj khu 9ko p / p p nhvv plmklmklgy nhugu pipoh.");
console.log(resultado);