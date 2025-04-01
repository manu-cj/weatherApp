import { describe, it, expect, beforeEach } from "vitest";
import { renderWeatherInfoForDay } from "../lib/filterDate";


beforeEach(() => {
  document.body.innerHTML = "<div id='weather-container'></div>";
});

describe("renderWeatherInfoForDay", () => {
  it("devrait créer les éléments de prévision météo pour chaque entrée de filterDate", () => {
    const parent = document.getElementById("weather-container");
    const mockData = [
      {
        dt: 1640995200,
        main: { temp: 15, humidity: 80, pressure: 1012 },
        weather: [{ icon: "01d", description: "Clear sky" }],
        wind: { speed: 5 },
      },
    ];

    renderWeatherInfoForDay(parent, mockData);

    const weatherByHours = parent.querySelector(".weather-by-hours-forecast");
    expect(weatherByHours).not.toBeNull();
    expect(weatherByHours.querySelector(".hour-forecast")).not.toBeNull();
    expect(weatherByHours.querySelector(".temperature-forecast")).not.toBeNull();
    expect(weatherByHours.querySelector(".description-forecast")).not.toBeNull();
    expect(weatherByHours.querySelector("img")).not.toBeNull();
    expect(weatherByHours.querySelector(".additional-info-forecast")).not.toBeNull();
  });

  it("devrait afficher la bonne heure, température et description", () => {
    const parent = document.getElementById("weather-container");
    const mockData = [
      {
        dt: 1640995200,
        main: { temp: 20, humidity: 60, pressure: 1015 },
        weather: [{ icon: "02d", description: "Partly cloudy" }],
        wind: { speed: 3 },
      },
    ];

    renderWeatherInfoForDay(parent, mockData);
    const weatherByHours = parent.querySelector(".weather-by-hours-forecast");
    
    expect(weatherByHours.querySelector(".hour-forecast").innerText).toMatch(/\d{2}:\d{2}/);
    expect(weatherByHours.querySelector(".temperature-forecast").innerText).toBe("20°C");
    expect(weatherByHours.querySelector(".description-forecast").innerText).toBe("Partly cloudy");
  });
});
