/*La enfermera del CAPS del barrio Hormiguitas solicitó un script que permita
calcular el valor promedio del peso de los recién nacidos registrados durante
el segundo trimestre del año. Para eso se deberá procesar una colección de
los pesos de todos los recién nacidos en ese periodo*/

let PesosRecienNacidos=[20,40,60,5];

function promedio(pesos) { 
    let PromedioPeso=0;   
    for (let i = 0; i < pesos.length; i++) {
        PromedioPeso=PromedioPeso+pesos[i];
    }
    PromedioPeso=PromedioPeso/pesos.length;
            return `El valor promedio del peso de los recién nacidos registrados durante el segundo trimestre del año es ${PromedioPeso}`
}

console.log(promedio(PesosRecienNacidos));
