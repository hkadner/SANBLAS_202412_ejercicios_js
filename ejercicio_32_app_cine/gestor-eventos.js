document.querySelector("#b-titulo").addEventListener("click", () => {
    filtrarPeliculas("#t-titulo", "Title");
});

//Se busca por cada pulsación en la caja de Título
/*
document.querySelector("#t-titulo").addEventListener("input", () => {
    filtrarPeliculas("#t-titulo","Title");
});
*/

document.querySelector("#b-actor").addEventListener("click", () => {
    filtrarPeliculas("#t-actor", "Actors");
});

//Se busca cuando se pulsa el botón de Buscar en la sección género
/*
document.querySelector("#b-genero").addEventListener("click", () => {
    filtrarPeliculas("#s-genero","Genre");
});
*/

document.querySelector("#s-genero").addEventListener("change", () => {
    filtrarPeliculas("#s-genero", "Genre");
});

document.querySelector("#b-anyo").addEventListener("click", () => {
    filtrarPeliculas("#t-anyo", "Year");
});

function filtrarPeliculas(idElementoBusqueda, nombreAtributoBusqueda) {
    clearCards();
    const textoBusqueda = document.querySelector(idElementoBusqueda).value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula[nombreAtributoBusqueda]
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);
}