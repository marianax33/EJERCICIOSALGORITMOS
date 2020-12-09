/*6. Para mejorar el proceso de búsqueda que desarrollamos anteriormente
(Punto 1) para el administrador de una cancha de Futsal “Panchito”,
incorporar un script que reciba el vector y lo ordene en forma ascendente,
para ello debe utilizar el método de ordenación de Selección.*/

function ordenacionSeleccion(valoresOrdenar) {
    let minimo = 0;
    let iteraciones, idx, cambio;
    for(iteraciones = 0; iteraciones < (valoresOrdenar.length); iteraciones++){
        minimo = iteraciones;
        for(idx = iteraciones + 1; idx < (valoresOrdenar.length); idx++){
            if (valoresOrdenar[minimo] > valoresOrdenar[idx]) {
                minimo = idx; 
            }
        }
        cambio = valoresOrdenar[minimo];
        valoresOrdenar[minimo] = valoresOrdenar[iteraciones];
        valoresOrdenar[iteraciones] = cambio; 
    }
    return  `orden selección: ${valoresOrdenar}`;
}

function Ordenar(ventas) {

    resultadoOrdenado=[];
    resultadoOrdenado=ventas.sort();
    return `orden sort: ${resultadoOrdenado}`;
}
let VentasFebrero=[20.1,65.2,24.2,85.50];
console.log(Ordenar(VentasFebrero));
console.log(ordenacionSeleccion(VentasFebrero));