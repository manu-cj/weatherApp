import { fetchWeatherData } from "./Api";

export const choiceCity = () => {
    const search = document.querySelector(".search");
    const searchButton = document.querySelector(".searchButton");
    const defaultCity = "Chimay";
   

    // Function to fetch and display weather data


    // Load weather data for the selected city
    const loadCityWeather = () => {
        const city = localStorage.getItem("selectedCity") || defaultCity;
        fetchWeatherData(city);
    };

    // Event listener for search button
    searchButton.addEventListener("click", () => {
        const city = search.value.trim();
        if (city) {
            localStorage.setItem("selectedCity", city);
            fetchWeatherData(city);
        } else {
            console.warn("Please enter a valid city name.");
        }
    });

    // Initial load
    loadCityWeather();
};
