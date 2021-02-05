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
                reject(errorMessage);
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

document.getElementById('movie-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const movieElem = Array.from(document.getElementsByClassName('movie-title'));
    console.log(movieElem);
    const moviePromise = getMovieData(movieElem[0].value);
    moviePromise.then((movieData) => {
        return getCast(movieData[0]);
    }).then((castInfo) => {
        return getPerson(castInfo);
    }).then((personInfo) => {
        console.log(personInfo);
    });
});

/*
$.ajax({
    url: `${apiUrl}memento`,
    method: `get`,
    success: (movieData1) => {
        $.ajax({
            url: `${apiUrl}inception`,
            method: `get`,
            success: (movieData2) => {
                $.ajax({
                    url: `${apiUrl}interstellar`,
                    method: `get`,
                    success: (movieData3) => {
                        console.log(movieData1.results);
                        console.log(movieData2.results);
                        console.log(movieData3.results);
                    },
                    error: (errorMsg3)=>{
                        reject(errorMsg3);
                    }
                });
            },
            error: (errorMsg2)=>{
                reject(errorMsg2);
            }
        });
    },
    error: (errorMsg1)=>{
        reject(errorMsg1);
    }
});*/
