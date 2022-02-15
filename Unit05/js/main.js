//create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults dic
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements 
    long </span>`
}

listTrees();

//Add a redwood to the end to old way
// var addTreeStart = function() {
//     trees.push("redwood");
//     listTrees();
// };
// var redwood,onclick = addTreeStart;

//more concise version of add a redwood to the end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
};

// Add a pear to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
};

document.querySelector('#remove_tree1').onclick = () => {
    if(trees.length >= 1) {
        trees.shift();
        listTrees();
    } else {
        listTrees();
        errorElement.textContent = "No more trees can be removed, please add more trees"
    }
};

document.querySelector('#remove_tree2').onclick = () => {
    if(trees.length <= 1) {
        errorElement.textContent = "No second tree can be removed, please add more trees" 
    } else {
        trees.splice (1,1)
        listTrees();    
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if(trees.length >= 1) {
        trees.pop();
        listTrees();
    } else {
        listTrees();
        errorElement.textContent = "No more trees can be removed, please add more trees"
    }
};

// document.querySelector('#sortTrees').onclick = () => {
//     trees.sort(function (a, b) {
//         return a.localeCompare(b);
//         });
//     };


document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 0) {
        trees.sort((a, b) => {return a.localeCompare(b);
        });
        listTrees();
    } else {(trees.length <=1) 
        listTrees();
        errorElement.textContent = "Please add trees to sort the tree list"
    };
};

document.querySelector('#lowerTrees').onclick = () => {
    let treeList = []
    treeList = trees.map(trees => trees.toLowerCase())
    trees.splice(0, treeList.length, ...treeList)
    listTrees();
};

//Get the Third Tree
document.querySelector("#showName3").onclick = () => {
    if (trees.length < 3) {
      displayResults.innerHTML = "";
      error.innerHTML = "There are less than 3 trees, please add more trees";
    } else {
      treeList = [...trees];
      displayResults.innerHTML = `Tree number 3 is ${treeList[2]}`;
    }
  };

//Get the Fourth Tree
document.querySelector("#showName4").onclick = () => {
    if (trees.length < 4) {
      displayResults.innerHTML = "";
      error.textContent = "There are less than 4 trees, please add more trees";
    } else {
      treeList = [...trees];
      displayResults.innerHTML = `Tree number 4 is ${treeList[3]}`;
    }
  };