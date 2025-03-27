import { WeatherToday } from "../components/WeatherToday";


export const fetchWeatherData = async (city) => {
    const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${ApiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const weatherInfo = {
            city: data.city.name,
            temperature: data.list[0].main.temp,
            ressenti: data.list[0].main.feels_like,
            description: data.list[0].weather[0].description,
            date: data.list[0].dt_txt,
            icon: data.list[0].weather[0].icon,
            humidity: data.list[0].main.humidity,
            wind: data.list[0].wind.speed,
            pression: data.list[0].main.pressure,
        };
        console.log(data);
        
        console.log("Weather Info:", weatherInfo);
        WeatherToday(weatherInfo);
        return weatherInfo;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};