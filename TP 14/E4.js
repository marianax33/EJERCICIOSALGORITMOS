/*4. La profesora de la asignatura de Introducción a Informática pidió la
colaboración de los alumnos, para escribir un script de ordenamiento, que
permita tomar un vector con los nombres de los alumnos y los imprima por
pantalla en forma ascendente.
*/



function Ordenar(nombres) {
    for (let i = 0; i  < nombres.length; i++) {  
         nombres[i] = nombres[i].toUpperCase();
    }
    resultadoOrdenado=[];
    resultadoOrdenado=nombres.sort();
    return resultadoOrdenado;
}
let NombresAlumnos=["Maria", "Juan", "Pedro", "amalia", "Karina", "Federico"];
console.log(Ordenar(NombresAlumnos));