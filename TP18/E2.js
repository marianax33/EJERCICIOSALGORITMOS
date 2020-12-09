/*2) Crear un registro asignado a una variable que contenga la información de una
notebook, especificando: sku, marca, procesador, memoria ram, capacidad de disco,
tipo de disco, resolución, si tiene lectograbadora CD/DVD y precio.
*/

function crearRegistro (p_sku, p_marca, p_procesador, p_memoriaRam, p_capacidad, p_disco, p_tipoDisco, p_resolucion, p_lectograbadora, p_precio) {
    return {
        nroSku:p_sku,
        marca:p_marca,
        procesador:p_procesador,
        memoriaRam:p_memoriaRam,
        capacidad:p_capacidad,
        disco:p_disco,
        tipoDisco:p_tipoDisco,
        resolucion:p_resolucion, 
        lectograbadora:p_lectograbadora, 
        precio:p_precio
    };
}

let notebook=[];
notebook.push(crearRegistro(1,'hp','procesador',2,1000,'Western','duro','hd',false,5600));
notebook.push(crearRegistro(2,'lenovo','procesador',3,500,'Western','duro','hd',true,8500));
notebook.push(crearRegistro(3,'sony','procesador',5,750,'Western','solido','hd',false,9500));



function consulta(notebook) {
    let registroResultado =[];
    for (let i = 0; i < notebook.length; i++) {
        if ((notebook[i]['lectograbadora']==true) && (notebook[i]['precio'] < 10000 )) {
            return notebook[i];

           // console.log('hola');
        }
        
    }
}

/*S
let registroResultado = {
    nroSku: unaNote,
};
resultado.push(registroResultado);
}

console.log(consulta(notebook));



function eleccion(listado=[]) {
    let resultado=[];
    let i=0;
    while (i < listado.length) {

        let unaNote = listado[i]['nroSku'];
        let suma;
        while (i < listado.length && unaNote == listado[i]['nroSku'] && listado[i]['lectograbadora']==true && listado[i]['precio'] <=10000  ) {
            suma+= listado[i]['precio'];
            i++;
            console.log('hola');
        }
        let registroResultado = {
            nroSku: unaNote,
        };
        resultado.push(registroResultado);
    }
    return resultado;

}

*/
console.log(consulta(notebook));


