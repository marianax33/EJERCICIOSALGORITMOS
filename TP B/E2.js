/*2. Hacer una función “convertirARS” que permita convertir un valor ingresado en
pesos a las monedas Dolar, Euro o Real, recibiendo como parámetro la abreviación
según corresponda (USD)(EUR)(BRL).
Por ejemplo: console.log(convertirARS(100, “USD”));
Debe devolver un valor, por ejemplo: 0,013            */

function convertirARS(pesos,moneda) {
    if (moneda=="EUR") {
        let conv=pesos/89;
        return "$"+pesos+" = "+conv+" EUR";
    }
    if (moneda=="USD") {
        let conv=pesos/75;
        return "$"+pesos+" = "+conv+" USD";
    } 
    if (moneda=="BRL") {
        let conv=pesos/14;
        return "$"+pesos+" = "+conv+" BRL";
    }
}
let resultado=convertirARS(100, "USD");
console.log(resultado);