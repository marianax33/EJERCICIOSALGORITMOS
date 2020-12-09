/*8. Realizar una función que calcule el Índice de masa corporal (IMC) tomando como
parámetros los valores de peso y altura de una persona.
Por ejemplo: console.log(calcularIMC(peso,altura));
*/

function calcularIMC(peso, altura) {
    let imc=peso/(altura*altura);
    return "Con "+peso+"kg y "+altura+" metros. "+"El Indice de masa corporal es: "+imc;
}
console.log(calcularIMC(50,1.80));