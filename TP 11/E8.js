/*8. Hacer una función que reciba un string o cadena de caracteres y determine si
la misma se trata de una dirección de correo electrónico bien definida.
Considerar para esto las siguientes reglas:
a. Debe comenzar con al menos tres (3) caracteres indicando el nombre
del usuario,
b. Debe contener el caracter “@” para separar nombre de usuario del
dominio,
c. El texto del dominio debe tener al menos tres (3) caracteres
inicialmente, luego un punto “.” y dos caracteres al menos para
determinar el final del dominio,
d. Considerar que no puede finalizar en punto y que podría haber más de
un punto para un dominio más largo, por ejemplo: fceqyn.unam.edu.ar*/

function Correo(direccion) {
    let arroba=false;
    let puntoDominio=false;
    let i=0;
    let ubicacionArroba=0;
    let dominio="";
    let longitud=direccion.length;
    let usuario=0;
    

    while (i<longitud) {  
        while ((direccion[i]!="@")&&(i<longitud)) {
            usuario++;
            i++;
        }
        if (usuario<3) {
            return "El usuario tiene menos de 3 caracteres";
        }
        if (direccion[i]=="@") {
            arroba=true;
            ubicacionArroba=i;
            i++; 
        }
        while ((i>ubicacionArroba)&&(i<longitud)) {
            while ((direccion[i]!=".")&&(i<longitud)) {
                dominio++;
                i++
            }
            if (direccion[i]==".") {
                puntoDominio=true;
            }
            i++;
        }

    }
    if (direccion[ubicacionArroba+1]=="."||direccion[ubicacionArroba+2]=="."||direccion[ubicacionArroba+3]==".") {
        return "El inicio del dominio debe tener mas de 3 caracteres";
    }
    if (dominio<3) {
        return "El dominio tiene menos de 3 caracteres";
    }
    if (direccion[longitud-1]=="." ) {
        return "no puede finalizar en punto";
    }
    if (direccion[longitud-1]=="."||direccion[longitud-2]==".") {
        return "El dominio debe finalizar con al menos dos caracteres";
    }
    if (arroba==true && puntoDominio==true) {
        return "El correo "+direccion+" es válido.";
    }

}

let resultado=Correo("caceresmariana33@fceqyn.unam.edu.ar");
console.log(resultado);
