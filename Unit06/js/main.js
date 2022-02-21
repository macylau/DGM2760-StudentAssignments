function tellStory() {
    let nounsArray = document.querySelector('#nouns').value.toLowerCase().split(/\s*[,\n." "]+\s*/);

    let adjectivesArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s*[,\n." "]+\s*/);

    let verbsArray = document.querySelector('#verbs').value.toLowerCase().split(/\s*[,\n." "]+\s*/);
    

const output = document.querySelector("#result");

output.innerHTML = tellStory;
}

let story = document.createElement("p");
let results = document.querySelector("#result");
