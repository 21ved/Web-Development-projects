function getWeather() {
    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name!";
        return;
    }

    // Dummy temperature logic (for learning)
    const temp = Math.floor(Math.random() * 15) + 20;

    result.innerHTML = 
        "Weather in " + city + "<br>" +
        "Temperature: " + temp + "°C";
}
