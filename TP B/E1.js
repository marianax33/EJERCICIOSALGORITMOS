/*1. Hacer una función “farenheit2celsius” que permita convertir un valor de
temperatura expresado en grados Farenheit a grados Celsius.
Por ejemplo: console.log(farenheit2celsius(32));
Debe devolver: 0*/

function farenheit2celsius(fare) {
    let centigrados= fare-32;
    return fare+"°F = "+centigrados+"°C"
}

console.log(farenheit2celsius(32));