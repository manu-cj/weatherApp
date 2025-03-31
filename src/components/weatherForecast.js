import {
    ChevronRight,
    ChevronLeft,
  } from "lucide-static";
  import { renderWeatherInfoForDay } from "../lib/filterDate";
import { ForecastCharts } from "./ForecastCharts";
  
  export const weatherForecast = (forecastList) => {
    const main = document.querySelector("main");
    const forecastByDaySection = document.createElement("section");
    forecastByDaySection.className = "card";
    forecastByDaySection.id = "forecastByDay";
  
    const forecastByDayTitle = document.createElement("h2");
    forecastByDayTitle.className = "forecast-title";
    forecastByDayTitle.innerText = "Next Day Forecast";
  
    const forecastByDayDiv = document.createElement("div");
    forecastByDayDiv.className = "forecast-by-day";
    forecastByDayDiv.id = "forecastByDayDiv";
  
    const weatherInfoForDaySelectedDiv = document.createElement("div");
    weatherInfoForDaySelectedDiv.className = "weather-info-for-day";
  
    // Group forecasts by day
    const groupForecastsByDay = (forecastList) =>
      forecastList.reduce((grouped, item) => {
        const dateStr = new Date(item.dt * 1000).toISOString().split("T")[0];
        grouped[dateStr] = grouped[dateStr] || [];
        grouped[dateStr].push(item);
        return grouped;
      }, {});
  
    const groupedForecasts = groupForecastsByDay(forecastList);
    const dates = Object.keys(groupedForecasts);
    let currentIndex = 0;
  
    const daySelectDiv = document.createElement("div");
    daySelectDiv.className = "day-select";
    const daySelected = document.createElement("p");
    daySelected.className = "day-selected";
    const daySelectIconDiv = document.createElement("div");
    daySelectIconDiv.className = "day-select-icon";
  
    const previousDayIcon = document.createElement("i");
    previousDayIcon.innerHTML = ChevronLeft;
    previousDayIcon.className = "previous-day";
    previousDayIcon.id = "previous-day";
    previousDayIcon.role = "button";
  
    const nextDayIcon = document.createElement("i");
    nextDayIcon.innerHTML = ChevronRight;
    nextDayIcon.className = "next-day";
    nextDayIcon.id = "next-day";
    nextDayIcon.role = "button";
  
    // Function to update the display based on the selected day
    const updateSelectedDay = () => {
      const selectedDate = dates[currentIndex];
    daySelected.innerText = new Date(selectedDate).toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

      const filterDate = forecastList.filter(
        (item) => new Date(item.dt * 1000).toISOString().split("T")[0] === selectedDate
      );

      weatherInfoForDaySelectedDiv.innerHTML = "";
      renderWeatherInfoForDay(weatherInfoForDaySelectedDiv, filterDate);
      const chartContainer = document.createElement("div");
      chartContainer.className = "chart-container";
      weatherInfoForDaySelectedDiv.appendChild(chartContainer);
      ForecastCharts(chartContainer, filterDate);
    };
  
    nextDayIcon.addEventListener("click", () => {
      if (currentIndex < dates.length - 1) {
        currentIndex++;
        updateSelectedDay();
      }
    });
  
    previousDayIcon.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSelectedDay();
      }
    });
  
    // Display available days
    dates.forEach((date, index) => {
      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
      });
  
      const forecastDayDiv = document.createElement("div");
      forecastDayDiv.className = "forecast-day";
      forecastDayDiv.id = "forecastDay";
  
      const dateElement = document.createElement("h3");
      dateElement.className = "date";
      dateElement.innerText = formattedDate;
  
      dateElement.addEventListener("click", () => {
        currentIndex = index;
        updateSelectedDay();
      });
  
      forecastDayDiv.appendChild(dateElement);
      forecastByDayDiv.appendChild(forecastDayDiv);
    });
  
    updateSelectedDay();
  
    forecastByDaySection.appendChild(forecastByDayTitle);
    forecastByDaySection.appendChild(forecastByDayDiv);
    daySelectDiv.appendChild(daySelected);
    daySelectIconDiv.appendChild(previousDayIcon);
    daySelectIconDiv.appendChild(nextDayIcon);
    daySelectDiv.appendChild(daySelectIconDiv);
    forecastByDaySection.appendChild(daySelectDiv);
    forecastByDaySection.appendChild(weatherInfoForDaySelectedDiv);
    main.appendChild(forecastByDaySection);
  };
  