/*3. El subgerente de una regional de la cadena de minimercados El Goloso
S.R.L. solicitó un script que permita informar el día de menor y mayor ventas
registradas durante el mes de Octubre. Determinar en qué tipo de estructura
se deben almacenar tales datos.
*/



function Mayor(ventas) { 
    let may=-1;
    let dia;   
    for (let i = 0; i < ventas.length; i++) {
        if (may <ventas[i]) {
            may=ventas[i];
            dia=i+1;
        }
    }
            return `El día de mayor ventas durante el mes de octubre fue el día ${dia}, con una venta de ${may}. `
}
function Menor(ventas) { 
    let men=ventas[0];
    let dia=1;   
    for (let i = 0; i < ventas.length; i++) {
        if (men >ventas[i]) {
            men=ventas[i];
            dia=i+1;
        }
    }
            return `El día de menor ventas durante el mes de octubre fue el día ${dia}, con una venta de ${men}. `
}
let VentasOctubre=[1,40,60,555,4,5,64,2,11,8,65,4,5,6,2,15,6,5,48,54,55,6,4,48,45,32,14,78,54,62,10];
console.log(Mayor(VentasOctubre));
console.log(Menor(VentasOctubre));

