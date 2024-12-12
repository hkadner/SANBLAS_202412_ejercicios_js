const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';


function processData(data) {//data (en este caso) es un array
    /*
    data.forEach(consola => {
        console.log(consola.name);
    });
    */
    /*
     const consolasVerticales =
         data.filter(consola => {
             return consola.orientation === 'portrait';
         });
 
     consolasVerticales.forEach(consola => {
         console.log(consola.name);
     });
     */

    /*
   const consolasNintendo = data.filter(consola => {
       return consola.name.toUpperCase().includes("NINTENDO");
   });
   consolasNintendo.forEach(consola => {
       console.log(consola.name);
   });
   */

    data.filter(consola => consola.name.toUpperCase().includes("NINTENDO")).
        forEach(element => console.log(element.name));
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

doRequest(URL);