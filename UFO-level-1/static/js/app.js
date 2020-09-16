// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

var tableBody = d3.select("tbody");

tableData.forEach(function(ufo){
    console.log(ufo);
    var row = tableBody.append("tr");
})
