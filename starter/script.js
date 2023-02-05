// Initial variables.
let apiKey = "452212a40dedef23b233ff248eddcb39";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let userInput = $('#search-input');
let forecastResult = $('#forecast');
let history = $('#history');
let city = $('#city');
let fiveDayForecast = $('#five-day-forecast');


$("#search-button").on("click", function(event) {
    event.preventDefault();
    let city = $("#search-input").val();
    let apiKey = "8e9760a756f0817505cdfc5d9f264228";
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    $.ajax({
        url: queryUrl,
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log(data);
          // process the retrieved data as needed
          let cityName = data.name;
          let temperature = data.main.temp;
          let humidity = data.main.humidity;
          let windSpeed = data.wind.speed;

          $("#city").text("In " + cityName);
          $("#temperature").text("The temp is " + temperature + "°C");
          $("#humidity").text("Current humidity is " + humidity + "%");
          $("#wind-speed").text("Current windspeed is " + windSpeed + "mph");
          console.log(cityName, temperature, humidity, windSpeed);
        },
        error: function(error) {
          console.log(error);
          // handle the error if the request fails
        }
      });
});
