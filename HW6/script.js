function filmView(img, title, year, genres) {
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
                    <p class="poster-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>`;
    cont.insertAdjacentHTML("beforeend", temp);
}

let promise = fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
    {
        method: "GET",
        headers: {
            "X-API-KEY": "d59814af-5d62-4b2c-8779-cc5930a36ecb",
            "Content-Type": "application/json",
        },
    }
);

promise
    .then((res) => res.json())
    .then((data) => {
        data.films.map(({ posterUrl, nameRu, year, genres}) => {
            let genre = genres.map(el => Object.values(el)).toString();
            filmView(posterUrl, nameRu, year, genre);
            console.log(data);
        });
    });