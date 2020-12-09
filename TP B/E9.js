/*9. Hacer una función “convertirMB” que reciba un valor en Megabyte(MB) y devuelva
el valor convertido a la unidad según el parámetro ingresado: Megabit(Mb),
Kilobyte(KB), Kilobit(Kb), Byte(B) y Bit(b).
Por ejemplo: console.log(convertirMB(numero,”KB”)); */

function convertirMB(numeroMB,unidad) {
    let conv=0;
    if (unidad=="Mb") {
        conv=numeroMB*8;
        return numeroMB +"MB son: "+conv+"MB"; 
        }
    if (unidad=="KB") {
    conv=numeroMB*1000;
    return numeroMB +"MB son: "+conv+"KB"; 
    }
    if (unidad=="kb") {
    conv=numeroMB*8000;    
    return numeroMB +"MB son: "+conv+"kb"; 
    }
    if (unidad=="B") {
    conv=numeroMB*1000000;    
    return numeroMB +"MB son: "+conv+"B"; 
    }
    if (unidad=="b") {
    conv=numeroMB*8000000;       
    return numeroMB +"MB son: "+conv+"b"; 
    }
}
console.log(convertirMB(500,"KB")); 