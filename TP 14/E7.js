/*7. Ahora que ya tenemos al vector con la información ordenada una vez
resuelto el ejercicio anterior. Se pide incorporar un script diferente, más
eficiente para resolver el Punto 1 tomando en cuenta que el vector en
cuestión se encuentra ordenado.


PUNTO 1:
El administrador de la cancha de Futsal “Panchito” solicitó un script que
gestione un vector que contiene la cantidad de equipos que han participado
en las ligas durante cada día del mes de Agosto. El mismo debe permitir
buscar dentro del array al día en el que participó el número de equipos que
indique como parámetro. Si no se encuentra ese valor buscado, se debe
retornar */


function busqueda(equipos, cantidadABuscar) { 
 
    let minimo = 0;
    let iteraciones, idx, cambio;
    let diaReal=[];
    let real;
    for(iteraciones = 0; iteraciones < (equipos.length); iteraciones++){
        minimo = iteraciones;
        for(idx = iteraciones + 1; idx < (equipos.length); idx++){
            if (equipos[minimo] > equipos[idx]) {
                minimo = idx;
                console.log(diaReal);
            }
            
        }
        cambio = equipos[minimo];
        equipos[minimo] = equipos[iteraciones];
        equipos[iteraciones] = cambio; 
        diaReal[iteraciones]=minimo;
        
    }
    let encontrado = false;
    let dia;
    for (let i = 0; i < equipos.length; i++) {
        if (equipos[i] == cantidadABuscar) {
            encontrado = true;
            dia=i+1;
        }
    }
        if (encontrado==true) {
            return `El día ${dia} del mes de agosto participaron ${cantidadABuscar} equipos`;
        }else{
            return -1;
        }
         
}


let EquiposDiasAgosto=[20,10,1,14,25];
console.log(busqueda(EquiposDiasAgosto,'20'));