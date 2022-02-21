
function tellStory() {

    let nounsArray = document.querySelector("#nouns").value.toLowerCase().split(/\s*[,\n." "]+\s*/);

    let adjectivesArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s*[,\n." "]+\s*/);

    let verbsArray = document.querySelector('#verbs').value.toLowerCase().split(/\s*[,\n." "]+\s*/);

myStory = `Once upon a time, there's a ${adjectivesArray[0]} ${nounsArray[0]} who invited a 
${adjectivesArray[1]} ${nounsArray[1]} to ${verbsArray[0]} a ${nounsArray[2]} from
${nounsArray[3]}'s ${nounsArray[4]}. While ${nounsArray[1]} was playing dead,
the ${adjectivesArray[0]} ${nounsArray[0]} took action. After that, they
 ${verbsArray[1]} the ${nounsArray[2]} at their ${nounsArray[5]}'s ${nounsArray[6]}. 
 When ${nounsArray[3]} found out, the ${nounsArray[0]} blamed it on the ${nounsArray[1]},
 ${nounsArray[3]} was mad at the ${nounsArray[1]}.`;

const output = document.querySelector("#story");

output.innerHTML = myStory;

}
