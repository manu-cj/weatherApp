export const renderWeatherInfoForDay = (parent, filterDate) => {
    filterDate.forEach((item) => {
        
        const weatherByHoursDiv = document.createElement("div");
        weatherByHoursDiv.setAttribute("class", "weather-by-hours-forecast");

        const globalInfos = document.createElement("div");
        globalInfos.setAttribute("class", "global-infos-forecast");

        const hour = document.createElement("p");
        hour.setAttribute("class", "hour-forecast");
        hour.innerText = new Date(item.dt * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

        const weatherIcon = document.createElement("img");
        weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`);
        weatherIcon.setAttribute("alt", item.weather[0].description);

        const temperature = document.createElement("p");
        temperature.setAttribute("class", "temperature-forecast");
        temperature.innerText = `${Math.round(item.main.temp)}°C`;

        const description = document.createElement("p");
        description.setAttribute("class", "description-forecast");
        description.innerText = item.weather[0].description;

        const additionalInfoDiv = document.createElement("div");
        additionalInfoDiv.setAttribute("class", "additional-info-forecast");

        const createAdditionalInfoItem = (label, value) => {
            const infoItem = document.createElement("div");
            infoItem.setAttribute("class", "additional-info-item-forecast");
            const textInfo = document.createElement("div");
            textInfo.setAttribute("class", "text-info-forecast");
            const labelElement = document.createElement("p");
            labelElement.innerText = label;
            const valueElement = document.createElement("p");
            valueElement.setAttribute("class", "value-infos-forecast");
            valueElement.innerText = value;
            textInfo.appendChild(labelElement);
            textInfo.appendChild(valueElement);
            infoItem.appendChild(textInfo);
            return infoItem;
        };

        additionalInfoDiv.appendChild(createAdditionalInfoItem("Humidity", `${item.main.humidity}%`));
        additionalInfoDiv.appendChild(createAdditionalInfoItem("Wind", `${item.wind.speed} m/s`));
        additionalInfoDiv.appendChild(createAdditionalInfoItem("Pressure", `${item.main.pressure} hPa`));

        weatherByHoursDiv.appendChild(globalInfos);
        globalInfos.appendChild(hour);
        globalInfos.appendChild(weatherIcon);
        globalInfos.appendChild(temperature);
        globalInfos.appendChild(description);

        weatherByHoursDiv.appendChild(additionalInfoDiv);

        parent.appendChild(weatherByHoursDiv);
    });
};