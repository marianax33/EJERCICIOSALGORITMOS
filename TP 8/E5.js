/*5. Escribe un programa que pida al usuario dos números enteros y que los muestre por
pantalla sumados, únicamente si ambos son positivos.*/


function positivos(x,y) {

    if (x>0 && y>0) {
        let suma= x+y;
        return x + " + "+ y +" = "+ suma;
    } else {
        
        if (x<0 && y<0) {
            return "Los números "+ x + " y "+ y +" son negativos ";
        } else {
            if (x<0) {
                return "El número "+ x + " es negativo.";   
            }
            if (y<0) {
                return "El número "+ y + " es negativo.";   
            }
        }

    }

}

//let x= prompt("Ingresar un número");
//let y= prompt("Ingresar otro número");
//let respuesta= positivos(x,y);
let respuesta= positivos(-5,-20);
console.log(respuesta);