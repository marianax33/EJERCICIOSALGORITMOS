/*2) La coordinadora de una carrera en un instituto provee a los estudiantes de la carrera
de Programadores un listado con las calificaciones de 10 estudiantes en 5 cátedras.
Se solicita:
a. Representar la información de las calificaciones en una matriz.
b. Calcular y mostrar el promedio de cada alumno.
c. Calcular y mostrar el promedio por cada asignatura.
d. Informar para cada alumno si aprobó o no aprobó, por cada asignatura
(considerar que se aprueba a partir de 6).
*/

/**
 * Ejemplo desarrollado en clase
 */

 // Declaración de una matriz 
 




function estadoAlumno(datos,catedra) {
    let vector=[];
    for (let f = 0; f < datos.length; f++) {
           // console.log(f);
            if (datos[f][catedra]<6) {
                vector[f]="DESAPROBADO";
            }else{
                vector[f]="APROBADO";
            }
    }
        
return vector;
}


let matriz= new Array(10);
for (let i = 0; i < matriz.length; i++) {
    matriz[i]=new Array(5);    
}

matriz[0]=[1,5,6,5,6];
matriz[1]=[7,5,6,7,5];
matriz[2]=[10,10,10,10,10];
matriz[3]=[9,9,9,9,9];
matriz[4]=[1,2,1,1,2];
matriz[5]=[9,7,5,4,2];
matriz[6]=[9,6,8,6,5];
matriz[7]=[1,5,4,6,2];
matriz[8]=[7,5,7,8,9];
matriz[9]=[9,8,7,6,9];
console.log(estadoAlumno(matriz,4));
