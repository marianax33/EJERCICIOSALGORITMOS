/*7. Pedir al usuario que ingrese una calificación, comprendida entre 0 – 10, el programa
deberá retornar, por medio de una función, por pantalla un mensaje con la etiqueta
que corresponda según la siguiente tabla:
Rango de calificación Etiqueta
0 – 3 Muy deficiente
3 - 5 Insuficiente
5 - 6 Suficiente
6 - 7 Bien
7 - 9 Notable
9 - 10 Sobresaliente */

function calificacion(nota) {
    if (nota>=0 && nota <=3) {
        return  "Su nota: "+ nota +". Calificación: Muy deficiente.";    
    }
    if (nota>3 && nota <=5) {
        return  "Su nota: "+ nota +". Calificación: Insufuciente.";    
    }
    if (nota>5 && nota <=6) {
        return  "Su nota: "+ nota +". Calificación: Sufuciente.";    
    }
    if (nota>6 && nota <=7) {
        return  "Su nota: "+ nota +". Calificación: Bien.";    
    }
    if (nota>7 && nota <=9) {
        return  "Su nota: "+ nota +". Calificación: Notable.";    
    }
    if (nota>9 && nota <=10) {
        return  "Su nota: "+ nota +". Calificación: Sobresaliente.";    
    }
    if (nota<0 || nota >10) {
        return  nota +". Error. No corresponde al rango solicitado.";    
    }
}

//let x= prompt("Ingresar calificación de 0 a 10");
//let respuesta= cañificacion(x);
let respuesta= calificacion(1);
console.log(respuesta);