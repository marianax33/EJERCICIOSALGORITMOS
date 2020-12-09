/*El administrador de la cancha de Futsal “Panchito” solicitó un script que
gestione un vector que contiene la cantidad de equipos que han participado
en las ligas durante cada día del mes de Agosto. El mismo debe permitir
buscar dentro del array al día en el que participó el número de equipos que
indique como parámetro. Si no se encuentra ese valor buscado, se debe
retornar */

let EquiposDiasAgosto=[5,20,15,4,7,9,32,40,4,5,12,18,19,20,25,11,14,21,29,32,35,39,37,2,8,23,6,2,10,1,14,];

function buscar(vector, buscar) { 
        for (let i = 0; i < vector.length; i++) {
            
            if (vector[i] == buscar) {
                return `El día ${i+1} del mes de agosto participaron ${buscar} equipos`;
            }
        }
        return false;
}

console.log(buscar(EquiposDiasAgosto,'20'));
//console.log(buscar(EquiposDiasAgosto,prompt('Ingresar cantidad a buscar')));

