let nombre = 'Daniel';
console.log(nombre);

let alumno = ['Fran', 39, 'Córdoba', true];
console.log(alumno[0]);

let jesus = {
    nombre : 'Jesús',
    edad : 42,
    ciudad : 'Madrid',
    programador : true
}
console.log(jesus.nombre);

console.log(typeof nombre);//str
console.log(typeof alumno);//object (aunque es un array)
console.log(typeof jesus);//object

//título, numeroTemporadas, sinopsis, año estreno, plataforma
//JSON - JavaScript Object Notation 
let from = {
    titulo : 'From',
    numeroTemporadas : 5,
    sinopsis : 'Un pueblo con engendros nocturnos',
    plataforma : 'MAX',
    reparto : [
        {
            nombre : 'Hannah Cheramy',
            personaje : 'Julie Matthews'
        },
        {
            nombre : 'Harold Perrineau',
            personaje : 'Boyd Stevens'
        },
        {
            nombre : 'Avery Konrad',
            personaje : 'Sara Myers'
        }
    ]
};

console.log(from.titulo);
console.log(from.reparto[0].nombre);
from.reparto.forEach((individuo)=>{
    console.log(`Nombre:${individuo.nombre}. 
        Personaje:${individuo.personaje}`);
});