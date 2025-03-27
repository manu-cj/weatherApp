import {
    MapPin,
    Droplets,
    Wind,
    Thermometer,
 } from 'lucide-static';
import { getBackgroundStyle } from '../lib/getBackgroundStyle';

export const WeatherToday = ( weather ) => {
    const app = document.querySelector("#app");
    const main = document.querySelector("main");
    main.innerHTML = "";

    const weatherToday = document.createElement("section");
    weatherToday.setAttribute("class", "card");
    weatherToday.setAttribute("id", "weatherToday");

    const cityAndDateDiv = document.createElement("div");
    cityAndDateDiv.setAttribute("class", "city-and-date");

    const city = document.createElement("h2");
    city.setAttribute("class", "city");
    city.innerHTML = MapPin + " " + weather.city;

    const date = document.createElement("p");
    date.setAttribute("class", "date");
    const optionsDate = { weekday: 'long', day: 'numeric', month: 'long' };
    date.innerText = new Date(weather.date).toLocaleDateString('fr-FR', optionsDate);

    const temperatureDiv = document.createElement("div");
    temperatureDiv.setAttribute("class", "temperature");

    const temperature = document.createElement("h2");
    temperature.setAttribute("class", "temperature");
    temperature.innerText = `${Math.round(weather.temperature)}°C`;

    const ressentie = document.createElement("p");
    ressentie.setAttribute("class", "ressentie");
    ressentie.innerHTML = "feels like: " + Math.round(weather.ressenti) + "°C";


    const icon = document.createElement("img");
    icon.setAttribute("src", `https://openweathermap.org/img/w/${weather.icon}.png`);
    icon.setAttribute("alt", weather.description);

    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.innerText = weather.description;


    const additionalInfoDiv = document.createElement("div");
    additionalInfoDiv.setAttribute("class", "additional-info");

    const humidity = document.createElement("div");
    humidity.setAttribute("class", "additional-info-item");
    humidity.setAttribute("id", "humidity");
    const humidityIcon = document.createElement("i");
    humidityIcon.innerHTML = Droplets;
    const humidityTextInfoDiv = document.createElement("div");
    humidityTextInfoDiv.setAttribute("class", "text-info");
    const humidityTitle = document.createElement("p");
    humidityTitle.innerText = "Humidity";
    const humidityValue = document.createElement("p");
    humidityValue.setAttribute("class", "value-infos");
    humidityValue.innerText = weather.humidity + "%";

    const wind = document.createElement("div");
    wind.setAttribute("class", "additional-info-item");
    wind.setAttribute("id", "wind");
    const windIcon = document.createElement("i");
    windIcon.innerHTML = Wind;
    const windTextInfoDiv = document.createElement("div");
    windTextInfoDiv.setAttribute("class", "text-info");
    const windTitle = document.createElement("p");
    windTitle.innerText = "Wind";
    const windValue = document.createElement("p");
    windValue.setAttribute("class", "value-infos");
    windValue.innerText = weather.wind + " km/h"; 

    const pression = document.createElement("div");
    pression.setAttribute("class", "additional-info-item");
    pression.setAttribute("id", "pression");
    const pressionIcon = document.createElement("i");
    pressionIcon.innerHTML = Thermometer;
    const pressionTextInfoDiv = document.createElement("div");
    pressionTextInfoDiv.setAttribute("class", "text-info");
    const pressionTitle = document.createElement("p");
    pressionTitle.innerText = "Pression";
    const pressionValue = document.createElement("p");
    pressionValue.setAttribute("class", "value-infos");
    pressionValue.innerText = weather.pression + " hPa";

    

    weatherToday.appendChild(cityAndDateDiv);
    cityAndDateDiv.appendChild(city);
    cityAndDateDiv.appendChild(date);

    weatherToday.appendChild(temperatureDiv);
    temperatureDiv.appendChild(temperature);
    temperatureDiv.appendChild(ressentie);
    temperatureDiv.appendChild(icon);
    temperatureDiv.appendChild(description);

    weatherToday.appendChild(additionalInfoDiv);
    additionalInfoDiv.appendChild(humidity);
    humidity.appendChild(humidityIcon);
    humidity.appendChild(humidityTextInfoDiv);
    humidityTextInfoDiv.appendChild(humidityTitle);
    humidityTextInfoDiv.appendChild(humidityValue);

    additionalInfoDiv.appendChild(wind);
    wind.appendChild(windIcon);
    wind.appendChild(windTextInfoDiv);
    windTextInfoDiv.appendChild(windTitle);
    windTextInfoDiv.appendChild(windValue);

    additionalInfoDiv.appendChild(pression);
    pression.appendChild(pressionIcon);
    pression.appendChild(pressionTextInfoDiv);
    pressionTextInfoDiv.appendChild(pressionTitle);
    pressionTextInfoDiv.appendChild(pressionValue);

    main.appendChild(weatherToday);
    app.appendChild(main);

    app.style = getBackgroundStyle(weather.description);



};