fetch("https://swapi.dev/api/films/")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayMovie(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayMovie(data) {
    for (let i = 0; i < data.count; i++) {
        const movie = data.results[i];
        const movieList = document.getElementById("movieList");
        const movieName = movie.title;
        const listItem = document.createElement("li");
        listItem.name = movieName;
        movieList.appendChild(listItem);

        const link = document.createElement("a");
        link.href = "Details.html?movie=" + (i + 1);
        link.innerHTML = movieName;
        listItem.appendChild(link);
    }
}

var input = document.getElementById("movieSearch");
input.onkeyup = function () {
    var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].name.toUpperCase();
        if (name.includes(filter))
            lis[i].style.display = "list-item";
        else
            lis[i].style.display = "none";
    }
}