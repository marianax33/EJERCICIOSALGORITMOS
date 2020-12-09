/*TP 17 - Ejercicio 4 - Item D

La Panificadora Trigo Limpio S.A. tiene 5 sucursales y en cada una de ellas comercializan pan 
blanco, de salvado y lactal. El gerente solicitó colaboración de los alumnos de la cátedra para 
implementar soluciones a:

[D] Generar una funcion denominada itemD que reciba cargada la matriz de ventas y un vector 
con los precios de cada producto (también cargado previamente). La función debe calcular y 
devolver un vector nuevo donde cada posición contiene las ganancias totales obtenidas para 
cada sucursal, si consideramos una lista de precios como la siguiente:*/



function itemD(ventas,precio) {
    let gananciaTotal=[];
    
    for (let f = 0; f < ventas.length; f++) {
        let subTotal=0;
        for (let c = 0; c < ventas[f].length; c++) {
           // console.log(precio[c]*ventas[f][c]);
            subTotal=subTotal+ventas[f][c]*precio[c]
           
        }
        
        gananciaTotal[f]=subTotal;
       }
        
return gananciaTotal;
}





// Carga de la matriz de ventas
let matriz = new Array(5);
matriz[0] = [100, 50, 20];
matriz[1] = [90, 110, 25];
matriz[2] = [95, 78, 27];
matriz[3] = [120, 54, 65];
matriz[4] = [86, 87, 140];

// Carga del vector de precios
let valores = [65.45, 94.59, 104.99];

// Llamada a la función
console.log(itemD(matriz, valores));