// API configurations
const apiKey = "d0a7fa79f2c86b0a0be8dc9e19146003";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Select elements from the DOM
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch and display weather data
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        // Update weather details
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        // Update weather icon based on conditions
        const weatherType = data.weather[0].main;
        if (weatherType === "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (weatherType === "Clear") {
            weatherIcon.src = "clear.png";
        } else if (weatherType === "Rain") {
            weatherIcon.src = "rain.png";
        } else if (weatherType === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (weatherType === "Mist") {
            weatherIcon.src = "mist.png";
        } else {
            weatherIcon.src = "default.png"; // Fallback icon
        }

        // Show the weather information
        document.querySelector(".weather").style.display = "block";

        // Clear the input field
        searchBox.value = "";
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Add event listener for the search button
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});
