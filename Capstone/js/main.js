async function showResults(searchWiki) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=15&srsearch=${searchWiki}`;
  await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const results = data.query.search;
      displayResults(results);
    })
    .catch(() => console.log(error));
}

function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector(".searchValue").value;
  if (input == "") {
    alert("Please enter something to search");
  }

  const searchWiki = input.trim();
  showResults(searchWiki);
}

const form = document.querySelector(".searchForm");
form.addEventListener("submit", handleSubmit);

function displayResults(results) {
  const wikiResults = document.querySelector(".wikiResults");
  wikiResults.innerHTML = " ";
  results.forEach((result) => {
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

    wikiResults.insertAdjacentHTML(
      "beforeend",
      `<div class="resultList" onclick="location.href='${url}';">
        <h3 class="resultList-title">
          <a href="${url}" target="_blank">${result.title}</a>
        </h3>
        <span class="resultList-detail">${result.snippet}...</span>
        <a href="${url}" class="readMore" target="_blank">Read More</a>
      </div>`
    );
  });
}
