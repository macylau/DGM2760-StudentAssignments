const url =
    "http://hp-api.herokuapp.com/api/characters";
 
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displayData(data);
    });
 
function displayData(data) {
    // grab the div element from the html file
    let charInfo = document.getElementById("display-info");
    //loop through the json data, and create a paragraph element
    //for each name, and append it to the div element in the html
    //file
    data.forEach((character) => {
        let charName = document.createElement("p");
        charName.innerHTML = character.name;
        charInfo.appendChild(charName);
    });
}