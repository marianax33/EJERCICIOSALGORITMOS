/*3. Hacer una función “multiplicarNumeroN” que realice la multiplicación de un numero
por si mismo la cantidad de veces establecida por parámetro. Es decir, hacer la
sumatoria de: (número * número) N veces.
Por ejemplo: console.log(multiplicarNumeroN(numero, cantidadDeVeces)); */

function multiplicarNumeroN(numero, cantidadDeVeces) {
    let res=Math.pow(numero, cantidadDeVeces)
return numero+ " multiplicado "+cantidadDeVeces+" veces por si mismo es: "+ res;
}

console.log(multiplicarNumeroN(2, 8));