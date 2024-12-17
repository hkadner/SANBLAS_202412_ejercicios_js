const URL='https://fpaniaguajavascript.github.io/movies-250.json';

function processMovie(data) {
    console.log(data);
}

doGetRequest(URL, processMovie);