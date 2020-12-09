/*4. Hacer una función “dividirNumeroPor2” que retorne la cantidad de veces que
puede dividirse un número por 2 hasta llegar a 1 o menos.
Por ejemplo: console.log(dividirNumeroPor2(numero));*/

function dividirNumeroPor2(numero) {
let res;
let ingreso=numero;
cont=0;
  while (numero>1) {
    res=numero/2
    numero=res;
cont++;
  }
      return "El número "+ingreso+ " se puede dividir "+cont+" veces por 2.";
}
console.log(dividirNumeroPor2(250));