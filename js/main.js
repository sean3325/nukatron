var myContainer = document.getElementById("my-container");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://cdn.rawgit.com/sean3325/nukatron/6c9fcf0d/history.json');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<div>" + "<h2>" + data[i].name + "</h2>" + "<p>" + data[i].status + "</p>" + "<p>" + data[i].message + "</p>" + "</div>";
  }

  myContainer.insertAdjacentHTML('beforeend', htmlString);

}

/*
const CHART = document.getElementById("LineChart");
let LineChart = new Chart(CHART, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 50],
        spanGaps: false,
      },
      {
        label: "My Second dataset",
        fill: true,
        backgroundColor: "rgba(75,75,192,0.4)",
        borderColor: "rgba(75,72,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,72,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,72,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 20, 60, 81, 80, 55, 90],
        spanGaps: false,
      },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
*/

/*
$.ajax({
  url: 'history.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function(data) {
    $(data.services).each(function (index, value) {
      console.log(value.name);
    });
  }
});
*/
