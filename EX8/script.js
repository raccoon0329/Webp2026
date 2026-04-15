// API URL from Page 55
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function() {
    // When request is finished and response is ready (Page 46 status 4)
    if (this.readyState == 4 && this.status == 200) {
        var dataset = JSON.parse(this.responseText);
        addNewData(dataset);
    }
};

function addNewData(dataset) {
    var myTable = document.getElementById("csie");
    // Iterate through the data and insert rows (Page 52)
    dataset.forEach(function(data, index) {
        var row = myTable.insertRow(-1); // Insert row at the end
        row.insertCell(0).innerHTML = data['title'];
        // Note: showInfo is an array, take the first element (Page 52)
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
    });
}

// Function to delete the last row (Page 21)
function delOldData() {
    var myTable = document.getElementById("csie");
    var rowCount = myTable.rows.length;
    // Keep the header row (index 0)
    if (rowCount > 1) {
        myTable.deleteRow(rowCount - 1);
    }
}
