function ocultarPeliculas() {
    //1. Hacer desaparecer todas las películas
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "None";
    });
}

document.querySelector("#boton-drama").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".drama").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});
document.querySelector("#boton-terror").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".terror").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});
document.querySelector("#boton-comedia").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".comedia").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});