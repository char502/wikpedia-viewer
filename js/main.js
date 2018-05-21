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

  results.forEach(function(item) {
    const titleForDisplay = "<h2>" + item.title + "</h2>" + "<br>";
    //for RegEx
    const titleForLink = item.title;
    //Replace the spaces in title with underscores so can be used as web link
    const webLinkTitle = titleForLink.replace(/\s+/g, "_");
    //console.log(webLinkTitle);
    const urlEnd = "</a>";
    const urlForLink =
      '<a href="https://en.wikipedia.org/wiki/" + webLinkTitle + "</a>"';
    //console.log(urlForLink);

    //const urlForLink = "https://en.wikipedia.org/wiki/";
    //console.log(urlForLink);
    //const clickableLink = "<a href= + urlForLink + webLinkTitle + </a>";
    //console.log(clickableLink);
    const snippet = "<p>" + item.snippet + "</p>";
    //console.log(snippet);
    resultArea.innerHTML +=
      "<div>" +
      urlForLink +
      titleForDisplay +
      urlEnd +
      snippet +
      urlForLink +
      "<hr>" +
      "</div>";
  });
}

//function displayResults(results) {
//   //make sure there is nothing in the search results div
//   resultPlace.innerHTML = "";

//results.forEach(function (result) {
//     const resultLink = encodeURI(
//       `https://en.wikipedia.org/wiki/${result.title}`
//     );
//     //console.log(resultLink);

//-----------------

// const form = document.querySelector(".searchForm");

// //adding an event listener to the form node
// form.addEventListener("submit", handleSubmit);

// //creating the handleSubmit function
// function handleSubmit(event) {
//   event.preventDefault();
//   const input = document.querySelector(".searchForm-input").value;
//   const searchQuery = input.trim();
//   //call fetchResults function and pass it to the searchquery
//   fetchResults(searchQuery);
// }
// //call the wiki api
// function fetchResults(searchQuery) {
//   const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchQuery}`;
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       const results = data.query.search;
//       displayResults(results);
//     })
//     .catch(function () {
//       console.log("An Error Occured");
//     });
// }

// const resultPlace = document.querySelector(".searchResults");

// function displayResults(results) {
//   //make sure there is nothing in the search results div
//   resultPlace.innerHTML = "";

//   results.forEach(function (result) {
//     const resultLink = encodeURI(
//       `https://en.wikipedia.org/wiki/${result.title}`
//     );
//     //console.log(resultLink);
//     resultPlace.insertAdjacentHTML(
//       "beforeend",
//       `
//     <div class="resultItem">
//       <h3 class="resultItem-title">
//         <a href="${resultLink}" target="_blank" rel="noopener">${
//       result.title
//       }</a>
//       </h3>
//       <span class="resultItem-snippet">${result.snippet}</span><br>
//       <a href="${resultLink}" class="resultItem-link" target="_blank" rel="noopener noreferrer">
//     </div>`
//     );
//   });
// }

// // Click a button to get random Wiki article
// const button = document.querySelector("#randomButton");

// button.addEventListener("click", function () {
//   window.open(
//     "https://en.wikipedia.org/wiki/Special:Random",
//     (target = "blank"),
//     (rel = "noopener noreferrer")
//   );
// });
