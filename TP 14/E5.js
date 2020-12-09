/*5. Tiffany, la vecina del barrio, sabe que eres informático y te pidió colaboración
para desarrollar un script que le permita ordenar un vector con el registro del
monto de ventas de su actividad comercial durante el mes de Febrero y lo
imprima de manera descendente.

*/

function ordenacionBurbuja(valoresOrdenar) {
    let  cambio;
    for (let i=0; i < (valoresOrdenar.length-1); i++){

        for (let idx = 0; idx < (valoresOrdenar.length - i - 1); idx++){

            if (valoresOrdenar[idx] > valoresOrdenar[idx + 1]){
                cambio = valoresOrdenar[idx];
                valoresOrdenar[idx] = valoresOrdenar[idx + 1];
                valoresOrdenar[idx + 1] = cambio;
            }
        }
    }
    return `orden burbuja: ${valoresOrdenar}`;
}

function Ordenar(ventas) {

    resultadoOrdenado=[];
    resultadoOrdenado=ventas.sort();
    return `orden sort: ${resultadoOrdenado.reverse()}`;
}
let VentasFebrero=[20.1,65.2,24.2,85.50];
console.log(Ordenar(VentasFebrero));
console.log(ordenacionBurbuja(VentasFebrero));