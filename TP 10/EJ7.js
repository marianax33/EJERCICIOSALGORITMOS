/*7. Hacer un script que permita contar la cantidad de palabras que finalice con
“A” de una cadena de caracteres.
*/

function cantidadCaracteres(frase) {
    let i=0;
    let cantidad=0;
    let longitud=frase.length;
    if (frase[longitud-1]=="a" || frase[longitud-1]=="A") {
        cantidad++; 
    }
    for ( i == 0; i < longitud; i++) {
        while (frase[i] ==" ") {
            if (frase[i-1]=="a" || frase[i-1]=="A") {
                cantidad++; 
            }
            i++;
        }   
   }
   return cantidad +" palabras terminan con a";
  
}
//let resultado= prompt("Ingresar frase");
let resultado=cantidadCaracteres(" pkkjhkja khusa 9ko p / p pa a nhvva plmklmklgy axwa pipoha");
console.log(resultado);


