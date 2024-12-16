const API_KEY = 'fe486a03';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

//'https://www.omdbapi.com/?apikey=fe486a03&t=Star Wars'

function processDataExercise01(pelicula){
    console.log(pelicula.Title);
    console.log(pelicula.Director);
    let actores = pelicula.Actors.split(',').map(actor=>actor.trim());
    actores.forEach(actor => {
        console.log(`Actor:*${actor}*`);
    });
}
function processDataExercise02(searchObject) {
    const peliculas = searchObject.Search;
    peliculas.filter(pelicula=>parseInt(pelicula.Year)>=2000).forEach(pelicula=> {
        console.log(`Título:${pelicula.Title}`);
        console.log(`Año:${pelicula.Year}`);
    });
}

function doRequest(url, processData) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error));
}
//Ejercicio 1
//Mostrar por pantalla el título, el director y los actores (por separado, hay que utilizar split).
//const URL_REQUEST = COMMON_URL + 't=Batman';
//console.log(URL_REQUEST);
//doRequest(URL_REQUEST, processDataExercise01);

//Ejercicio 2
//Mostrar el título y el año de las películas estrenadas en el año 2000 y sucesivos
const URL_REQUEST = COMMON_URL + 's=Star Wars';
//console.log(URL_REQUEST);
doRequest(URL_REQUEST, processDataExercise02);

