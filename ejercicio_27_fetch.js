const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';
function processData(data){
    console.log(data);
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
        .catch((error) => console.error("Fetch error:", error)); // In case of an error, it
}

doRequest(URL);