function filmView(img, title, year, genres, filmDesc) {
    const cont = document.querySelector(".posters");
    const temp = `
            <div class="poster-card">
                <img src="${img}" alt="poster">
                <div class="poster-content">
                    <h3>${title}</h3>
                    <div class="poster-info">
                        <span class="year">${year}</span>
                        <span class="genre">${genres}</span>
                    </div>
                    <p class="poster-description">${filmDesc}</p>
                </div>
            </div>`;
    cont.insertAdjacentHTML("beforeend", temp);
}

function promise(data) {
    return fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${data}`,
        {
            method: "GET",
            headers: {
                "X-API-KEY": "d59814af-5d62-4b2c-8779-cc5930a36ecb",
                "Content-Type": "application/json",
            },
        }
    )
}
let topFilms = `top?type=TOP_250_BEST_FILMS&page=1`;

promise(topFilms)
    .then((res) => res.json())
    .then((data) => {
        data.films.map(({filmId}) => {
            promise(filmId).then((res) => res.json()).then((data) => {
                let getGenre = data.genres.map(el => Object.values(el)).join(',');

                filmView(data.posterUrl, data.nameRu, data.year, getGenre, data.description)
            });            
        });
    });