/*6. Solicitar al usuario que indique su edad, el programa deberá decir si es mayor de 18
años, e indicar indica que puede conducir, de lo contrario, informará que es menor
de edad. */

function edad(años) {

    if (años>=18) {
        
        return  " Tiene "+ años +" años. Puede conducir.";
    } else {
        
        return  " Tiene "+ años +" años. Es menor de edad.";
          
    
    }
}

//let x= prompt("Ingresar edad");
//let respuesta= positivos(x);
let respuesta= edad(15);
console.log(respuesta);