const API_KEY = "461d22ca0f1fbe623a6806624399dcab";

let page = 1;

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w1280"

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function nextPage() {
    page +=1;
}

function prevPage() {
    page -=1;
}

function showMovies(movies){
    moviesElement.innerHTML = ''
    movies.forEach(movie => {
        const {title, poster_path, overview, popularity, vote_average} = movie
        console.log(popularity, vote_average)
        const movieCard = document.createElement("div")
        movieCard.classList.add("movie")
        
        movieCard.innerHTML = `
            <img src="${API_IMAGE_URL + poster_path}" alt="Movie Image"/>
            <div class="detail">
                <h3>${title}</h3>
                <p>${overview.substring(0, 200)}....</p>
                <div class="rating">
                    <h5>${popularity}%</h5>
                    <h5>⭐${vote_average}</h5>
                </div>
            </div>
        `
        moviesElement.appendChild(movieCard)
    });
}


getMovies(API_URL);