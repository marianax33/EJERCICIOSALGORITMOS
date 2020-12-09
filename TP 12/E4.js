/*4. Hacer una función que, dado un string, verifique si en la misma existe una
palabra que ingresa el usuario. La función debe devolver un fragmento de la
cadena que incluya desde la palabra en cuestión hasta el final de la cadena
(en caso de que la palabra no exista deberá devolver -1).
*/


function verificar(palabra,frase) {
    
buscar=frase.indexOf(palabra);

if (buscar>=0){
    return frase.slice(buscar);
}else{
    return "-1";
}
}


let resultado= verificar("funcion",'frase larga para probar la funcion de busqueda de palabra');
//let resultado= prompt("ingresar palabra a buscar: ");
console.log(resultado);