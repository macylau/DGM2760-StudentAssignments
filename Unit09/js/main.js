function duplicatMenu () {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a');

    // create the new list items for the bottom page
    let newList = document.createElement('ul');

    topList.forEach(menuItem => {
        let newLi = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', menuItem.getAttribute('href'));
        newLi.appendChild(newLink);

        document.getElementById('smallNavArea').appendChild(newList);
        newList.appendChild(newLi);

        newLink.textContent = menuItem.innerText;

    });
}
duplicatMenu();