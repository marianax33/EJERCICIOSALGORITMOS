/*6. Realizar un script que incluya dos funciones.
● Función "ingresarDatos": permite cargar en un array las notas de los
15 exámenes finales de los alumnos que cursaron la cátedra
“Introducción a la Informática” durante el 1er cuatrimestre de 2020.

● Función “procesarNotas": recibe el array y deberá procesar las notas
para informar: el promedio, la nota más baja, la nota más alta y las
cantidades de aprobados y desaprobados (considerar que se aprueba
con 6).*/
let array=[];
function ingresarDatos() {
    for (let index = 0; index < 3; index++) {
        array.push(prompt('Ingresar las 15 notas finales'));
    }
    return array;
}

function procesarNotas() {
    let promedio=0;
    let suma=0;
    for (let index = 0; index < 3; index++) {
        suma=suma+parseInt(array[index]);  
    }
    promedio=suma/3;
    return promedio;
}

