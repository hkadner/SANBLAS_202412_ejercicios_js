document.querySelector("#b-titulo").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-titulo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Title
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    /*peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });*/
    peliculasFiltradas.map(generateCard);//Es equivalente a la estructura comentada
});
/*
//Se busca por cada pulsación
document.querySelector("#t-titulo").addEventListener("input", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-titulo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Title
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});
*/
document.querySelector("#b-actor").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-actor").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Actors
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);//Es equivalente a la estructura comentada
});
/*
document.querySelector("#b-genero").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#s-genero").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Genre
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);//Es equivalente a la estructura comentada
});
*/
document.querySelector("#s-genero").addEventListener("change", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#s-genero").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Genre
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);//Es equivalente a la estructura comentada
});