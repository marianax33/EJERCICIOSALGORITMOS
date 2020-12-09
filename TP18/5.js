const registro = (p_nro_cliente, p_nro_cheque, p_importe) => {
    return {
        nro_cliente : p_nro_cliente,
        nro_cheque : p_nro_cheque,
        importe : p_importe
    };
}

//Empezar a codificar la respuesta desde acá

function procesar(listado) {
    let i = 0;
    // Variable en la que voy a devolver el resultado completo
    let resultado = []; 
    while (i < listado.length) {
        // Controlo el recorrido completo del array
        let unCliente = listado[i]['nro_cliente'];
        let cheques = 0;
        let suma=0;
        // Se tiene que traer la condición del while "padre"
        // Y esa condición tiene que ir primera para evitar errores
        // Esto se hace por el orden de procesamiento de las condiciones que hace el interprete
        while (i < listado.length && unCliente == listado[i]['nro_cliente']) {
            // Este bucle procesa todos los registros de hs extra de UN empleado
            suma += listado[i]['importe'];
            cheques ++;
            //console.log(`Legajo actual : ${listado[i]['nroLegajo']}`);
            i++;
        }
        // Termina de procesar a un empleado
        //console.log(`Nro de legajo: ${unLegajo} -- Cant Hs Extras: ${suma}`);
        
        // Genero un registro auxiliar para el resultado que tengo que devolver
        let registroResultado = {
            nro_cliente: unCliente,
            cantidad_cheques: cheques,
            sumaImporte: suma
        };
        // Cargo este registro auxiliar de resultado en el array de resultados
        resultado.push(registroResultado);
    }
    return resultado; // Devuelvo el resultado completo
}



let coleccion = [];
coleccion.push(registro(1,142,2000));
coleccion.push(registro(1,145,3500));
coleccion.push(registro(1,148,9800));
coleccion.push(registro(2,343,12000));
coleccion.push(registro(3,12423,2000));
coleccion.push(registro(3,14231,4000));
coleccion.push(registro(5,90,200));
coleccion.push(registro(5,92,21920));
coleccion.push(registro(5,102,45100));

console.log(procesar(coleccion));