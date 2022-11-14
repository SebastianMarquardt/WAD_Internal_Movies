const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movie = urlParams.get('movie');
var informationData = "";
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
        displayInformation(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayInformation(data) {
    createListItem("title", data.title);
    createListItem("episode_id", data.episode_id);
    createListItem("opening_crawl", data.opening_crawl);
    createListItem("director", data.director);
    createListItem("producer", data.producer);
    createListItem("release_date", data.release_date);

    JSONLinkHandler("species", data.species);
    JSONLinkHandler("starships", data.starships);
    JSONLinkHandler("vehicles", data.vehicles);
    JSONLinkHandler("characters", data.characters);
    JSONLinkHandler("planets", data.planets);

}

function createListItem(categoryName, name) {
    const tmpUl = document.createElement("ul");
    tmpUl.id = "informationUl";
    document.body.appendChild(tmpUl);
    const tmpCategory = document.createElement("li");
    tmpCategory.id = "infoCategoryName";
    tmpCategory.innerHTML = categoryName.toUpperCase() + ": ";
    tmpUl.appendChild(tmpCategory);
    const tmplI = document.createElement("li");
    tmplI.id = categoryName;
    tmplI.innerHTML = "\"" + name + "\"";
    tmpUl.appendChild(tmplI);
}

function JSONLinkHandler(categoryName, linkJSON) {
    const tmpUl = document.createElement("ul");
    tmpUl.id = categoryName;
    document.body.appendChild(tmpUl);
    const tmpLi = document.createElement("li");
    tmpLi.id = "categoryName";
    tmpLi.innerHTML = categoryName.toUpperCase() + ": ";
    tmpUl.appendChild(tmpLi);
    for (const link in linkJSON) {
        fetchInformation(categoryName, linkJSON[link]);
    }
}

function fetchInformation(categoryName, url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            createInformationList(categoryName, data.name);
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}

function createInformationList(categoryName, DataName) {
    const list = document.getElementById(categoryName);
    const tmp = document.createElement("li");
    tmp.id = categoryName + "Name";
    tmp.innerHTML = "\"" + DataName + "\"";
    list.appendChild(tmp);
}

