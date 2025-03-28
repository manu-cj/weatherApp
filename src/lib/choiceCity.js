import { fetchWeatherData } from "./Api";

export const choiceCity = () => {
    const search = document.querySelector(".search");
    const searchButton = document.querySelector(".searchButton");
    const defaultCity = "Chimay";
   

    const loadCityWeather = () => {
        const city = localStorage.getItem("selectedCity") || defaultCity;
        fetchWeatherData(city);
    };

    searchButton.addEventListener("click", () => {
        const city = search.value.trim();
        if (city) {
            localStorage.setItem("selectedCity", city);
            fetchWeatherData(city);
        } else {
            console.warn("Please enter a valid city name.");
        }
    });


    loadCityWeather();
};
