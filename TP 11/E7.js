/*7. Escribir un programa que permita ingresar una frase y un caracter cualquiera.
En caso que el caracter exista dentro de esa cadena, se imprimirá la posición
en que se encuentre y se repetirá todo otra vez (es decir, se ingresará otra
cadena y otro caracter a buscar). El programa termina cuando una búsqueda
devuelve cero. Para resolver el ejercicio, se deberá usar un módulo que
reciba ambos datos y devuelva la posición en que se encuentre el carácter (o
cero si no existe).
*/



function cantidadCaracteres(frase, caracter) {
    //let frase="atuhr estamos aguter haretecia la. jaula de los monos la actor.";
     let i=0;
     let fraseMayuscula=frase.toUpperCase();
     let resultado='';
 
             
            while (fraseMayuscula[i] !=".") {
                 
                 while (fraseMayuscula[i] ==" ") {
                     i++;
                 }   
                 resultado='';
                 if (fraseMayuscula[i] == caracter.toUpperCase()) {
                    resultado= "La posicion de la letra "+caracter+" es "+i;
                    return resultado;
                 }
                 i++;
            }     
             if (resultado==='') {
                 return 0;
            }
    }
 
 let res=cantidadCaracteres(prompt("ingrese frase"),prompt("ingrese caracter a buscar"));
 //let resultado=cantidadCaracteres("hola.","i");
 while (res !==0) {
    console.log(resultado);
 let res=cantidadCaracteres(prompt("ingrese frase"),prompt("ingrese caracter a buscar"));
 //    resultado=cantidadCaracteres("hola.","i");
 }