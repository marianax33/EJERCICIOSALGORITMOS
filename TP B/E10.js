/*10. Hacer una función “calcularCosto” que debe realizar el cálculo del valor a cobrar a
un cliente de una estación de servicio a partir de la cantidad de litros suministrada y
el precio por litro del combustible seleccionado. Una vez realizado este cálculo para
fines administrativos, se requiere liquidar sobre el importe total de la venta los
impuestos (IVA 21% e Ingresos Brutos 3.5%). El programa debe tomar el precio por
litro, la cantidad de litros e informar el valor a cobrar al cliente incluyendo impuestos.
Por ejemplo: console.log(calcularCosto(5, 55.60));
//(cantidadLitros, precioLitro)
Debe devolver: 346.11*/

function calcularCosto(cantidadLitros, precioLitro) {
    let importetotal=cantidadLitros*precioLitro;
    let iva=importetotal*21/100;
    let ingresosBrutos=importetotal*3.5/100;
    Cobrar=importetotal+iva+ingresosBrutos;
    return Cobrar;
}
console.log(calcularCosto(5, 55.60));