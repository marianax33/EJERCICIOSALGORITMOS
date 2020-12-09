/*Sobre lo desarrollado para el ejercicio anterior (Punto 8) incorporar métodos
que permitan obtener los nombres de los pacientes que tienen una deuda
mayor al promedio general de deuda del consultorio.*/

let pacientes=['alma','mario','jaime','Micaela','joaquin'];
let deuda=[100,2597,0,50,68];
let ConDeuda=[];
let suma=0;


for (let i = 0; i < deuda.length; i++) {   
    suma+=deuda[i];
}
let promedio=suma/deuda.length;
for (let i = 0; i < deuda.length; i++) {   
    if (deuda[i]>promedio) {
        ConDeuda.push(pacientes[i]);
    }
}
console.log(`El promedio de deuda es: $${promedio}, los pacientes con deuda superior son: ${ConDeuda}`);