function testDoor01(){
    console.log('Chequeando la puerta 01...');
    return true;
}
function testDoor02(){
    console.log('Chequeando la puerta 02...');
    return false;
}
//if (testDoor01()==true && testDoor02()==true) {//Modo shortcut
if (testDoor01()==true & testDoor02()==true) {//Evalúa las dos partes de la expresión
    console.log('TODO OK');
} else {
    console.error('ALGUNA PUERTA ESTÁ EN ERROR');
}

if (testDoor01() ^ testDoor02()) {//OR Exclusivo (sólo puede ser cierta una opción)
    console.log('Hay una puerta abierta y otra cerrada');
} else {
    console.error('Las dos puertas están abiertas o cerradas');
}