/*10.Hacer una función que reciba una frase y este deba calcular un código de
clave “identificación único”, como si se tratara de un hash. Para realizar la
aplicación, el “código único” se generará a partir de la concatenación de los
caracteres impares de la frase, con el valor Unicode del caracter en el índice
par siguiente. Por ejemplo: para la frase “Hola Mundo” deberá devolver
“H 111 l 97 77 u 110 d 111”.
Para este ejemplo, se deberá aplicar la función “cadena.charCodeAt(...)”.*/

function codigo(cadena) {
    let i=0;
    let fraseCodigo='';
    
    while (i<cadena.length) {
        if (cadena[i]==' ' && i<cadena.length) {
            fraseCodigo=fraseCodigo+' ';
        } 
        if (i%2==1 && i<cadena.length && cadena[i]!=' ') {
            fraseCodigo=fraseCodigo+cadena.charCodeAt(i);
        }
        if(i%2==0 && i<cadena.length && cadena[i]!=' '){
            fraseCodigo=fraseCodigo+cadena[i];
        }
        i++;
    }
    return fraseCodigo;
    
}
let resultado= codigo( 'Hola Mundo');
console.log(resultado);