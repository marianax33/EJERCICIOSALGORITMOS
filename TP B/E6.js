/*6. Un docente tiene las notas de 3 exámenes de sus alumnos y desea obtener un
promedio y calificar a sus alumnos. Para esto se deberá generar una función
“calificar” que en función del promedio obtenido devuelva una calificación según el
siguiente esquema:
a. 1 a 3: Insuficiente
b. 4 a 5: Regular
c. 6 a 7: Bueno
d. 8 a 9: Muy Bueno
e. 10: Excelente
Por ejemplo: console.log(calificar(7,7,7));
Debe devolver “Bueno”  */

function calificar(nota1, nota2, nota3) {
let promedio=(nota1+nota2+nota3)/3;

    if (promedio>=1 && promedio <4) {
        return  "Su promedio: "+ promedio +". Calificación: Insuficiente.";    
    }
    if (promedio>=4 && promedio <6) {
        return  "Su promedio: "+ promedio +". Calificación: Regular.";    
    }
    if (promedio>=6 && promedio <8) {
        return  "Su promedio: "+ promedio +". Calificación: Bueno.";    
    }
    if (promedio>=8 && promedio <10) {
        return  "Su promedio: "+ promedio +". Calificación: Muy bueno.";    
    }
    if (promedio=10) {
        return  "Su promedio: "+ promedio +". Calificación: Excelente";    
    }
   
}


let respuesta= calificar(10,5,8);
console.log(respuesta);
