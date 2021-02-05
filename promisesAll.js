const apiKey = `33a766dd663a74566faa8eb426eb10b6`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;

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
    const movieTitleArray = Array.from(document.getElementsByClassName('movie-title'));
    console.log(movieTitleArray);

    let moviePromises = movieTitleArray.map((inputElement) => {
        return getMovieData(inputElement.value)
    })
    console.log(moviePromises);

    Promise.all(moviePromises).then((promiseData) => {
        console.log(promiseData);
        document.getElementById('movies').innerHTML = `
            <img src=${imgUrl}${promiseData[0][0].poster_path} />
            <img src=${imgUrl}${promiseData[1][0].poster_path} />
            <img src=${imgUrl}${promiseData[2][0].poster_path} />
            `
    }).catch((errorMsg) => {
        console.log(errorMsg);
    });
});