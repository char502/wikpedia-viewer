const form = document.querySelector(".searchForm");

form.addEventListener("submit", searchQueryHandler);

function searchQueryHandler(event) {
  event.preventDefault();
  // target, define and clean up search input
  const searchInputRaw = document.querySelector(".searchForm-input").value;
  const searchInputClean = searchInputRaw.trim();
  //function to call the api with the search result included
  requestResults(searchInputClean);
}

//call the wiki api using fetch
function requestResults(searchInputClean) {
  const url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=";
  //console.log(url);
  const searchUrl = url + searchInputClean;
  //console.log(searchInputClean);
  console.log(searchUrl);
  fetch(searchUrl)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function(data) {
      //console.log(data);
      const results = data.query.search;
      //console.log(results);
      finalResults(results);
    })
    .catch(function() {
      console.log("An error occured");
    });
}

function finalResults(results) {
  //Target area where results are to be displayed
  const resultArea = document.querySelector(".searchResults");
  //clear previous search
  resultArea.innerHTML = "";

  //format output to screen
  results.forEach(function(item) {
    const titleForDisplay = "<h3>" + item.title + "</h3>" + "<br>";
    //RegEx - replace whitespace in title with underscores (enables append of title to wiki url - creates link to specific page)
    const webLinkTitle = item.title.replace(/\s+/g, "_");
    const url =
      '<a href="https://en.wikipedia.org/wiki/' +
      webLinkTitle +
      '" target=_blank">';
    const urlEnd = "</a>";
    const webLink = url + urlEnd;
    const snippet = "<p>" + item.snippet + "</p>";
    //console.log(snippet);
    resultArea.innerHTML +=
      "<div>" + url + titleForDisplay + webLink + snippet + "<hr>" + "</div>";
  });
}

//click a button to get random Wiki article
const button = document.querySelector("#randomButton");

button.addEventListener("click", function() {
  window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    (target = "blank"),
    (rel = "noopener noreferrer")
  );
});
