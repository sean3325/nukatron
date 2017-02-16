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
    "title":{
      "text":"Historical status over the last 30 days",
    },
    "subtitle": {
      "text":"The highlighted area represents the last 7 days of data"
    },
    scaleX:{
   	  markers:[
   	    {
   	      type: "area",
   	      range: [0,169]
   	    }
   	  ]
   	},
    "series": data
  };

  for (i = 0; i < data.length; i++) {
    htmlString += '<div class="alert">' + "<h2>" + data[i].name + "</h2>" + "<strong>" + data[i].status + "</strong>" + "<p>" + data[i].message + "</p>" + "</div>";
  }

  myContainer.insertAdjacentHTML('beforeend', htmlString);

  zingchart.render({
    id:'chartDiv',
    data:chartData,
    height:400,
    width:600
  });

}
