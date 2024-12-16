pelicula1 = {
    titulo : 'Título 1',
    anyo : 1980,
    duracion : 200
}

pelicula2 = {
    titulo : 'Título 2',
    anyo : 1980,
    duracion : 90
}

pelicula3 = new Object();
pelicula3.titulo = 'Título 3';
pelicula3.anyo = 1971;
pelicula3.duracion = 63;

console.log(typeof pelicula1);
console.log(typeof pelicula2);
console.log(typeof pelicula3);
console.log(pelicula1);
console.log(pelicula2);
console.log(pelicula3);

let peliculas = new Array();
peliculas.push(pelicula1, pelicula2, pelicula3);

console.log("**** ORDENADO POR DURACION ****");
peliculas.sort((p1,p2)=>p1.duracion - p2.duracion).forEach(p=>{
    console.log(p);
});

console.log("**** ORDENADO POR AÑO ASCENDENTE****");
peliculas.sort((p1,p2)=>p1.anyo - p2.anyo).forEach(p=>{
    console.log(p);
});

console.log("**** ORDENADO POR AÑO DESCENDENTE****");
peliculas.sort((p1,p2)=>p2.anyo - p1.anyo).forEach(p=>{
    console.log(p);
})

console.log("**** ORDENADO POR AÑO Y DURACION****");
peliculas.sort((p1,p2)=>{
    if (p1.anyo==p2.anyo) {
        return p1.duracion - p2.duracion;
    }
    return p1.anyo - p2.anyo;
}).forEach(p=>{
    console.log(p);
});