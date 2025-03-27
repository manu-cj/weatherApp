import { WeatherToday } from "../components/WeatherToday";

export const fetchWeatherData = async (city) => {
    const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;

    try {
        const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${ApiKey}`;
        const geoResponse = await fetch(geoUrl);
        
        if (!geoResponse.ok) {
            throw new Error(`Erreur lors de la récupération des coordonnées : ${geoResponse.status}`);
        }
        
        const geoData = await geoResponse.json();
        
        if (geoData.length === 0) {
            throw new Error("Ville non trouvée");
        }
        
        const { lat, lon, name } = geoData[0];

        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`;
        const weatherResponse = await fetch(weatherUrl);
        
        if (!weatherResponse.ok) {
            throw new Error(`Erreur lors de la récupération des données météo : ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();

        const weatherInfo = {
            city: name, 
            temperature: weatherData.list[0].main.temp,
            ressenti: weatherData.list[0].main.feels_like,
            description: weatherData.list[0].weather[0].description,
            date: weatherData.list[0].dt_txt,
            icon: weatherData.list[0].weather[0].icon,
            humidity: weatherData.list[0].main.humidity,
            wind: weatherData.list[0].wind.speed,
            pression: weatherData.list[0].main.pressure,
        };

        console.log("Données météo :", weatherData);
        console.log("Infos formatées :", weatherInfo);

        WeatherToday(weatherInfo);
        return weatherInfo;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error;
    }
};
