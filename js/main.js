var myContainer = document.getElementById("my-container");
var myChart = document.getElementById("chartDiv");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://cdn.rawgit.com/sean3325/nukatron/6c9fcf0d/history.json');
ourRequest.onload = function() {
  var myData = JSON.parse(ourRequest.responseText);
  renderHTML(myData);
};
ourRequest.send();

function renderHTML(data) {
  var htmlString = "";
  var chartData = {
    "type":"line",
    "series": data
  };

  for (i = 0; i < data.length; i++) {
    htmlString += '<div class="alert">' + "<h2>" + data[i].name + "</h2>" + "<p>" + data[i].status + "</p>" + "<p>" + data[i].message + "</p>" + "</div>";
  }

  myContainer.insertAdjacentHTML('beforeend', htmlString);

  zingchart.render({
    id:'chartDiv',
    data:chartData,
    height:400,
    width:600
  });

}
