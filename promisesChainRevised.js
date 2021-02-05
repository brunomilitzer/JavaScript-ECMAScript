const apiKey = `33a766dd663a74566faa8eb426eb10b6`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;

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
                reject(errorMsg);
            }
        });
    });
}

function getCast(movie) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${castUrl}/${movie.id}/credits?api_key=${apiKey}`,
            method: 'get',
            success: (castData) => {
                resolve(castData.cast[0])
            }
        });
    });
}

function getPerson(person) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
            success: (personData) => {
                resolve(personData);
            }
        })
    })
}

async function addMovieToDom(movieTitle) {
    const movieData = await getMovieData(movieTitle);
    const castData = await getCast(movieData[0]);
    const personData = await getPerson(castData[0]);

    document.getElementById('movies').innerHTML = "";
    document.getElementById('movies').innerHTML += `
        <div class="col-sm-4">
            <div>
                <img src="${imgUrl}${movieData[0].poster_path}">
            </div>
            <div>
                <img src="${imgUrl}${personData.profile_path}">
            </div>
        </div>
    `;
}

document.getElementById('movie-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const movieElement = Array.from(document.getElementsByClassName('movie-title'));
    movieElement.forEach((movieElement) => {
        addMovieToDom(movieElement.value);
    })
});