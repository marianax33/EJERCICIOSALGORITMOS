/*7. Se ingresan datos que indican la cantidad de personas que se registran en un
hotel cada día de enero. Se necesita contar con una estadística que informe
el promedio de personas ingresadas por día, en todo el mes.*/

let cantidades = [146, 284, 82, 169, 263, 57, 89, 215, 138, 64, 215, 138, 152, 155, 116, 176, 286, 112, 200, 132, 298, 73, 194, 275, 198, 137, 182, 286, 127, 121,  230];

function calcularPromedio() {
    let suma=0;
    for (let index = 0; index < 31; index++) {
        suma=suma+(cantidades[index]);
    }
    return parseInt(suma/31);
}

console.log(calcularPromedio(cantidades));

function ingreso(){
    for (let index = 0; index < 31; index++) {  
        registro.push(prompt( `Ingresarcantidad de personas que ingresaronel dia ${index+1}`));
    }
}
