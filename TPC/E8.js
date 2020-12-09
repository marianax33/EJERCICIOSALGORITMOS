/*TP C - Ej. 8 (vectores)
Realizar una función unificar que reciba dos vectores, A y B, de N elementos cada uno, 
desordenados y con elementos no repetidos.
Se deberá generar y devolver un tercer vector C de N+N elementos, con los valores de los 
componentes de los vectores A y B en orden. Considerar que cada vector almacena apellidos 
de los alumnos inscriptos para rendir en dos mesas de examen de dos asignaturas correlativas 
(ver caso de ejemplo).*/

function unificar(vecA,vecB) {
let C=[];
let i = 0
    
C=vecA.concat(vecB);
      
    C=C.sort();
      return C;
}


// Declaración de los vectores
let vectorA = ['Navarro', 'Diaz', 'Latorre', 'Alvarez', 'Sosa'];
let vectorB = ['Martinez', 'Zorrilla', 'Basualdo', 'Tabares'];

// Llamada a la función
console.log(unificar(vectorA, vectorB));