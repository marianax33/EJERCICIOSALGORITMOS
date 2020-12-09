/* 3. Pedir al usuario un número y construir la tabla de multiplicar (mensajes por cada
renglón) de los valores correspondientes al multiplicar el valor ingresado por el 1
hasta llegar al 10. Realizar esto empleando la estructura de control FOR.*/
 
let valor= prompt("Ingresar valor para obtener la tabla de multiplicar");
  //  let valor=5
    let multiplicacion;
    for (let x  = 1; x<=10; x++) {
        multiplicacion=valor*x;
        console.log( valor +" x "+x+" = "+multiplicacion);
    }
