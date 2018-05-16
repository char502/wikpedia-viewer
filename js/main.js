const form = document.querySelector(".searchForm");

//adding an event listener to the form node
form.addEventListener("submit", handleSubmit);

//creating the handleSubmit function
function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector(".searchForm-input").value;
  const searchQuery = input.trim();
  //call fetchResults function and pass it to the searchquery
  fetchResults(searchQuery);
}
//call the wiki api
function fetchResults(searchQuery) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchQuery}`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const results = data.query.search;
      displayResults(results);
    })
    .catch(function() {
      console.log("An Error Occured");
    });
}

const resultPlace = document.querySelector(".searchResults");

function displayResults(results) {
  //make sure there is nothing in the search results div
  resultPlace.innerHTML = "";

  results.forEach(function(result) {
    const resultLink = encodeURI(
      `https://en.wikipedia.org/wiki/${result.title}`
    );
    //console.log(resultLink);
    resultPlace.insertAdjacentHTML(
      "beforeend",
      `
    <div class="resultItem">
      <h3 class="resultItem-title">
        <a href="${resultLink}" target="_blank" rel="noopener">${
        result.title
      }</a>
      </h3>
      <span class="resultItem-snippet">${result.snippet}</span><br>
      <a href="${resultLink}" class="resultItem-link" target="_blank" rel="noopener noreferrer">
    </div>`
    );
  });
}

// Click a button to get random Wiki article
const button = document.querySelector("#randomButton");

button.addEventListener("click", function() {
  window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    (target = "blank"),
    (rel = "noopener noreferrer")
  );
});
