const API_KEY = 'ae790dbc';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

//'https://www.omdbapi.com/?apikey=fe486a03&t=Star Wars'

function processData(pelicula){
    console.log(pelicula);
}

function doRequest(url) {
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
doRequest(COMMON_URL + 't=Star Wars');
//Mostrar por pantalla el título, el director y los actores (por separado, hay que utilizar split).

//Ejercicio 2
//doRequest(COMMON_URL + 's=Star Wars');
//Mostrar el título y el año de las películas estrenadas en el año 2000 y sucesivos