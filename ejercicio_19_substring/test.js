let cuenta = 'ES6000491500051234567892';//(24) Cuenta del B. Santander
//Mostrar las diferentes secciones del número de cuenta
/*
Pais (2)
Dígitos de control (2)
Código entidad (4)
Código sucursal (4)
Dígitos de control (2)
Número de cuenta (10)
*/
const pais = cuenta.substring(0,2);
const codigoControl = cuenta.substring(2,4)
const entidad = cuenta.substring(4,8);
const sucursal = cuenta.substring(8,12);
const codigoControlCuenta = cuenta.substring(12,14);
const numeroCuenta = cuenta.substring(14)
console.log(pais, codigoControl, entidad, sucursal, codigoControlCuenta, numeroCuenta);