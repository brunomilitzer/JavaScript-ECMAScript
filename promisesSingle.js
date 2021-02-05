const apiKey = `33a766dd663a74566faa8eb426eb10b6`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;

// WRONG WAY
/*
let globalMoveData = [];
$.ajax({
   url: apiUrl+"Interstellar",
   method: `get`,
   success: (movieData) => {
       console.log(movieData);
       globalMoveData = movieData.results
   }
});

console.log(globalMoveData);*/

// THE Promise WAY
function getMovieData(movieTitle) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiUrl+movieTitle,
            method: `get`,
            success: (movieData) => {
                resolve(movieData.results);
            },
            error: (errorMsg) => {
                reject(errorMessage);
            }
        });
    });
}

document.getElementById('movie-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const movieTitle = document.getElementById('movie-title').value;
    const movieData = getMovieData(movieTitle);
    console.log(movieData);
    // I want to put the movie info into the main page!!!
    movieData.then((data) => {
        console.log(data);
        document.getElementById('movies').innerHTML = `<img src=${imgUrl}${data[0].poster_path} />`
    }).catch((errorMsg) => {
       console.log(errorMsg);
    });
});
