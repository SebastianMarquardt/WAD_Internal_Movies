const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movie = urlParams.get('movie');
console.log(movie);

fetch("https://swapi.dev/api/films/" + movie)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayInformation(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayInformation(data) {
    const informationList = document.getElementById("information");
    const title = document.createElement("li");
    title.name = data.title;
    title.innerHTML = data.title;
    const episodeId = document.createElement("li");
    episodeId.name = data.episode_id;
    episodeId.innerHTML = data.episode_id;
    const openingCrawl = document.createElement("li");
    openingCrawl.name = data.opening_crawl;
    openingCrawl.innerHTML = data.opening_crawl;
    const director  = document.createElement("li");
    director.name = data.director;
    director.innerHTML = data.director;
    const producer  = document.createElement("li");
    producer.name = data.producer;
    producer.innerHTML = data.producer;
    const releaseDate  = document.createElement("li");
    releaseDate.name = data.release_date;
    releaseDate.innerHTML = data.release_date;
    informationList.appendChild(title);
    informationList.appendChild(episodeId);
    informationList.appendChild(openingCrawl);
    informationList.appendChild(director);
    informationList.appendChild(producer);
    informationList.appendChild(releaseDate);
}