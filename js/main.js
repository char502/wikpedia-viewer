$(document).ready(function() {
  $("#search").focus();
  $("#search").off("keyup");
  $("#search").on("keyup", function() {});
});

//fetch()`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${resultsPage}&srsearch=${searchQuery}`;
