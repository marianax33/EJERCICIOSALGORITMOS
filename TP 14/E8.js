/*En un vector están almacenados los nombres de los pacientes de una clínica
dental, y en otro vector, paralelo al anterior, la cantidad que ese cliente
adeuda o un cero (0) si sus pagos están al día. Escribir un script que genere
2 listados, uno con los clientes que tienen deudas pendientes y el otro, con
los clientes al corriente de pago*/


let pacientes=['alma','mario','jaime'];
let deuda=[100,2597,0];
let ConDeuda='';
let SinDeuda='';
for (let i = 0; i < deuda.length; i++) {
    
    if (deuda[i]==0) {
        SinDeuda=SinDeuda+pacientes[i]+' ';
    }else{
        ConDeuda=ConDeuda+pacientes[i]+' ';
    }

    
}
console.log(`Pacientes sin deuda: ${SinDeuda}`);
console.log(`Pacientes con deuda: ${ConDeuda}`);