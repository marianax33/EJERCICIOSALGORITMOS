/*4. Pedir al usuario un número y construir la tabla de multiplicar (mensajes por cada
renglón) de los valores correspondientes al multiplicar el valor ingresado p */

 
//let valor= prompt("Ingresar valor para obtener la tabla de multiplicar");
let valor=5
let multiplicacion;
let inicio=1;
const final=10;

while (inicio<=final) {
    multiplicacion=valor*inicio;
    console.log( valor +" x "+inicio+" = "+multiplicacion);
    inicio++;
}