// from data.js
var tableData = data;
console.log(tableData)

var tableBody = d3.select("tbody");

tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tableBody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("filter-btn");
button.on("click",function() {
    tableBody.html ("");

    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var newData = tableData.filter(sighting => sighting.datetime === inputValue)
    console.log(newData);

    newData.forEach(function(selections) {
    console.log(selections);
    var row = tableBody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});
