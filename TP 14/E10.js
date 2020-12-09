/*10.Realizar un algoritmo que lea dos vectores A y B de dimensión 100 y realice:
● Una función que retorne un tercer vector C (también de dimensión
100), donde cada elemento se define como C[i] = max { A[i], B[i] }.
Imprimir los 3 vectores.
● Una función que retorne un tercer vector C, también de 100
componentes, donde cada C[i] es el componente del vector A que se
encuentra en la posición que indica B[i] (no es necesario hacer un
validación de índices). Imprimir los 3 vectores.*/
function ordenar_y_buscar(array, valorBuscado) {
	//esta es mi funcion Seleccion ya comentada en GitHub pero con algunas modificaciones
	
	//***************ORDENAMIENTO***************************************************
	let indiceParalelo = [];	//agregado para el ejercicio
	let minimo = 0;	
	let auxiliar = [];	//cambiado el tipo de variable en relación al original
	let indiceAux = 0;	//agregado para el ejercicio
	
	for (var h = 0; h < array.length; h++) {
		indiceParalelo.push(h+1);	//cargo el array con valores correlativos iniciando en 1
	}
	
	for (var i = 0; i < array.length-2; i++) {	
		minimo = i;	
		for (var j = i + 1; j <= array.length -1; j++) {													
			if(array[j] < array[minimo]){	
				minimo = j;	
			}
		}

		if(array[i] != array[minimo]){
		auxiliar = array[i];
		indiceAux = indiceParalelo[i];	//agregado para el ejercicio

		array[i] = array[minimo];
		indiceParalelo[i] = indiceParalelo[minimo];	//agregado para el ejercicio

		array[minimo] = auxiliar;
		indiceParalelo[minimo] = indiceAux;	//agregado para el ejercicio	
		}	
	}
	//*****************************************************************************

	//***********************BUSQUEDA**********************************
	
	for (var k = 0; k < array.length; k++) {	//recorre todo el array
		if(array[k] == valorBuscado){	//compara cada valor del array con el valor deseado
			return indiceParalelo[k];	//si el valor deseado se encuentra en el array devuelvo el valor de vector paralelo
		}
	}

	return -1;	//si no encuentro el valor, devuelvo -1
}


//NOTA II: lo siguiente es solo para pruebas. No va en el moodle
let datos = [152, 284, 82, 169, 263, 57, 89, 215, 138, 64, 215, 138, 15,2, 
			155, 116, 176, 286, 112, 200, 132, 298, 73, 194, 275, 198, 137, 
			182, 286, 127, 121, 230];

console.log("El día fue: " + ordenar_y_buscar(datos, 152));