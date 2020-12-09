/*9. Hacer una función que reciba una frase o párrafo, lo procese y retorne la
palabra más larga encontrada.*/
function palabraLarga(frase) {
   
    let i=0;
    let longitud=frase.length;
    let palabra="";
    let contador=0;
    let contadorMasLargo=0;
    let palabraMasLarga;
    
    while (i<longitud) {
        while (frase[i]==" ") {
            i++;
        }
        palabra="";
        contador=0;
        while (frase[i]!=" " && i<longitud) {
            palabra=palabra+frase[i];
            contador++;
            i++;
        }
        if (contadorMasLargo < contador) {
            contadorMasLargo=contador;
            palabraMasLarga = palabra;
        }
    }

    return "La palabra más larga es: "+palabraMasLarga+" con "+contadorMasLargo+" caracteres.";
}

let resultado=palabraLarga("Considerar que no puede finalizar en punto y que podría haber");
console.log(resultado);