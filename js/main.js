// document.getElementById("getJson").addEventListener("click", getJson);

// const searchTerm = document.getElementById("search").nodeValue;

// const wikiApi =
//   "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE";
// searchTerm;

// function getJson() {
//   //console.log(123);
//   fetch(wikiApi).then(function(res) {
//     console.log(res.json());
//   });
// }

// To get a random wiki article on button click

var button = document.getElementById("randomButton");

button.addEventListener("click", function() {
  window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    "_blank",
    "noopener"
  );
});

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
