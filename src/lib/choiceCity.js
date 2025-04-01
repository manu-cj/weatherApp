import { fetchWeatherData } from "./fetchWeatherData";

export const choiceCity = async () => {
    const search = document.querySelector(".search");
    const searchButton = document.querySelector(".searchButton");
    const defaultCity = "Paris, FR";
   

    const loadCityWeather = () => {
        const city = localStorage.getItem("selectedCity") || defaultCity;
        fetchWeatherData(city);
    };

    search.addEventListener("input", async () => {
        const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;

        let suggestionsContainer = document.querySelector(".suggestions");
        if (!suggestionsContainer) {
            suggestionsContainer = document.createElement("div");
            suggestionsContainer.className = "suggestions";
            const header = document.querySelector("header");
            header.appendChild(suggestionsContainer);
        }

        if (search.value.trim().length > 0 && document.activeElement === search) {
            try {
                const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.value.trim()}&limit=5&appid=${ApiKey}`;
                const geoResponse = await fetch(geoUrl);
                const cities = await geoResponse.json();

                suggestionsContainer.innerHTML = ""; 

                cities.forEach((city) => {
                    const suggestionItem = document.createElement("div");
                    suggestionItem.className = "suggestion-item";
                    suggestionItem.textContent = `${city.name}, ${city.country}`;
                    suggestionItem.style.cursor = "pointer";
                    suggestionItem.addEventListener("mousedown", (event) => {
                        event.preventDefault();
                        search.value = city.name+", " + city.country;
                        localStorage.setItem("selectedCity", city.name +", " + city.country);
                        fetchWeatherData(city.name);
                        suggestionsContainer.innerHTML = "";
                        fetchWeatherData(city.name +", " + city.country);

                    });
                    suggestionsContainer.appendChild(suggestionItem);
                });
            } catch (error) {
                console.error("Error fetching city suggestions:", error);
            }
        } else {
            suggestionsContainer.innerHTML = "";
        }
    });

    search.addEventListener("blur", () => {
        const suggestionsContainer = document.querySelector(".suggestions");
        if (suggestionsContainer) {
            suggestionsContainer.innerHTML = "";
        }
    });


    searchButton.addEventListener("click", () => {
        const city = search.value;
        console.log("Selected city:", city);
        
        if (city) {
            localStorage.setItem("selectedCity", city);
            fetchWeatherData(city);
        } else {
            console.warn("Please enter a valid city name.");
        }
    });


    loadCityWeather();
};
