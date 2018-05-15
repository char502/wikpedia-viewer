const form = document.querySelector(".searchForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector(".searchForm-input").value;
  const searchQuery = input.trim();
  //console.log(searchQuery);
  // call `fetchResults` function and pass it the `searchQuery`
  fetchResults(searchQuery);
}

function fetchResults(searchQuery) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  //console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //console.log(data);
      const results = data.query.search;
      displayResults(results);
    })
    .catch(function() {
      console.log("An Error Occured");
    });
}

const resultPlace = document.getElementById("searchResult");

function displayResults(results) {
  //console.log(results);
  results.forEach(function(element) {
    paraItem = document.getElementById("searchResult");
    paraItem.innerHTML = paraItem.innerHTML + element + title + "<br>";
  });
}

// const resOnPage = function(finalData) {
//   finalData = data.query.search;
//   console.log(finalData);
//   for (let i in data) {
//     const displaySearchResult = document.querySelector(".searchResult");
//     const newElement = displaySearchResult.createElement("p");
//     //newElement.id = data[i];
//     //newElement.className = "SearchResultItem";
//     newElement.immerHTML = data[i];
//     displaySearchResult.appendChild(newElement);
//   }
// };

//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(() => console.log("An Error occured"));
// }

// To get a random wiki article on button click

const button = document.getElementById("randomButton");

button.addEventListener("click", function() {
  window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    (target = "_blank"),
    (rel = "noopener noreferrer")
  );
});
// const newWnd = window.open();
// newWnd.opener = null;

// "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" +
//       $("#search").val(),

// "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" +
//   searchTerm;

// https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE

// function ajaxCall() {
//   $.ajax({
//     url:
//       "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" +
//       $("#search").val(),
//     dataType: "jsonp",
//     type: "GET",
//     success: function(data) {
//       $("#update").empty();
//       var data = JSON.stringify(data);
//       data = JSON.parse(data);
//       //console.log(data);
//       console.log(data.query.search);
//       //loop through data and output
//       var output = "";
//       data.query.search.forEach(function(data) {
//         var title = "<h2>" + data.title + "</h2>" + "<br>";
//         var snippet = "<p>" + data.snippet + "</p>";
//         var url =
//           '<a href="https://en.wikipedia.org/wiki/' +
//           data.title +
//           '" target=_blank">';
//         var endUrl = "</a>";
//         output += url + title + endUrl + snippet + "<hr>";
//       });
//       $("#update").append(output);
//     },
//     error: function() {
//       alert("the data could not load");
//     }
//   });
// }

// $(document).ready(function() {
//   $("#search").focus();
//   $("#search").off("keyup");
//   $("#search").on("keyup", function() {
//     ajaxCall();
//   });
// });

//fetch()`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${resultsPage}&srsearch=${searchQuery}`;
