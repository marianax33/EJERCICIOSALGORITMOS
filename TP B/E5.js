/*5. Hacer una función “dividirNumeroPorN” que retorne la cantidad de veces que
puede dividirse un número por otro número, hasta llegar a 1 o menos.
Por ejemplo: console.log(dividirNumeroPorN(dividendo, divisor));*/

function dividirNumeroPorN(dividendo, divisor) {
        let res;
        let ingreso=dividendo;
        cont=0;
        while (dividendo>1) {
            res=dividendo/divisor
            dividendo=res;
            cont++;
        }
            return "El número "+ingreso+ " se puede dividir "+cont+" veces por "+divisor;
        }
        console.log(dividirNumeroPorN(250, 10));