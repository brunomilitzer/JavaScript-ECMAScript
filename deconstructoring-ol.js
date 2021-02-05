//Object literal
//3 primary ways of making an Object
/*let x = new Object();*/
//let x = Object.create(null);
/*
let x = {
    a: 1
}
console.log(x);
*/
/*
const stuffFromElsewhere = {
    name: "Bruno",
    career: "Software Engineer" ,
    language: "Java",
    aMethod: function () {
        console.log("I am developer");
    }
}

const name = stuffFromElsewhere.name;
const aMethod = stuffFromElsewhere.aMethod();


const newThing = {
    name: name,
    aMethod: aMethod
}

const newThing2 = {
    name,
    aMethod() {
        console.log("I continue developing");
    }
}*/

// Deconstructing:
const someJSON = {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi, Thriller",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK, Canada",
    Awards: "Won 1 Oscar. Another 43 wins & 148 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
        {
            Source: "Internet Movie Database",
            Value: "8.6/10"
        },
        {
            Source: "Rotten Tomatoes",
            Value: "72%"
        },
        {
            Source: "Metacritic",
            Value: "74/100"
        }
    ],
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "1,473,010",
    imdbID: "tt0816692",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Syncopy, Lynda Obst Productions",
    Website: "N/A",
    Response: "True"
}

/*const title = someJSON.Title;
const year = someJSON.Year;
const imdbRaitings = someJSON.imdbRating;

processData({
    title,
    year,
    imdbRaitings
})*/

// New way
/*
const { Title, Year, imdbRaitings } = someJSON;

console.log(Title);
console.log(Year);
console.log(imdbRaitings);

processData({
    Title,
    Year,
    imdbRaitings
})

// Another way
//const {Title: title, Year: year, imdbRatings: imdbRatings} = someJSON;

//console.log(title);

function processData(data) {
    // something important happens...
    /!*const title = data.Title;
    const year = data.Year;
    const raitings = data.imdbRating;*!/
    const { Title: title, Year: year } = data;

    console.log(`${title} is an awesome movie it came out on ${year}`);
}*/

/*
processData(someJSON)

function processData({ Title: title, Year: year }) {
    console.log(`${title} is an awesome movie it came out on ${year}`);
}
*/

// go into nested objects
/*const { Ratings: {[0]: firstRaitings }  } = someJSON;
console.log(firstRaitings.Source);*/

/*
getArea({height: 100, width: 20})

function getArea({width, height}) {
    console.log(width);
}
*/

function userProfile(userData) {
    // Awful way
    const name = userData.name;
    const address = userData.address;
}

function userProfile(userData) {
    // Better way
    const {name, address} = userData;
}

function userProfile({name, address}) {
    // Best way
}