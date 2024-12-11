//** DECLARACIÓN DE ARRAYS */
let nombres = ['Amanda','Sara','Pablo'];//Array con 3 elementos
//let apellidos = new Array();//Array vacio
//let apellidos = new Array(10);//Array con 10 posiciones vacias (undefined)
let apellidos = new Array('Castejón','Alonso','Huertas');
let cosas = new Array('Botella',10.3,true,NaN);//Contenido heterogéneo

//** OBTENCIÓN DEL TAMAÑO DEL ARRAY */
console.log(apellidos.length);

//** ACCESO A LOS ELEMENTOS */
console.log(apellidos[0]);//Castejón, El cero es el primer elemento de los arrays
console.log(apellidos);//(3) ['Castejón', 'Alonso', 'Huertas']
apellidos[0]='López';//Se sustituye el contenido de la posición 0
console.log(apellidos);//(3) ['López', 'Alonso', 'Huertas']

//** RECORRER UN ARRAY */
for (let i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}
//forEach 'tradicional'
function mostrar(nombre){
    console.log(nombre.toUpperCase());
}
nombres.forEach(mostrar);

//forEach con función anónima (operador flecha)
nombres.forEach((nombre)=>{
    console.log(nombre.toUpperCase());
});

//forEach con función anónima (operador flecha), incluye el índice
nombres.forEach((nombre, indice)=>{
    console.log(nombre.toUpperCase());
    console.log(indice);
});