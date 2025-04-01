# weatherApp
## Description

`weatherApp` is an application that allows users to check weather forecasts for a given location. It leverages APIs to fetch real-time weather data and displays it in a clear and intuitive manner.

## Features

- Search for weather by city or GPS location.
- Display of current, hourly, and daily forecasts.
- Simple and responsive user interface.
- Integration with reliable weather APIs.

## Work Accomplished

- **Design and Development**: Created the application's architecture and implemented core functionalities.
- **API Integration**: Connected to a weather API to fetch real-time data.
- **User Interface**: Developed a modern and responsive interface using front-end frameworks.
- **Error Handling**: Implemented mechanisms to handle errors related to API requests or user input.
- **Testing**: Wrote unit and functional tests to ensure the application's reliability.

## Technologies Used

- Language: JavaScript, HTML, CSS


# 📁 Project Structure

This document describes the organization of the project's files and folders.

## 🌳 Directory Tree
```
📦 src
 ┣ 📂 assets
 ┣ 📂 components
 ┃ ┣ 📜 ForecastCharts.js
 ┃ ┣ 📜 NotFound.js
 ┃ ┣ 📜 SearchBar.js
 ┃ ┣ 📜 weatherForecast.js
 ┃ ┗ 📜 WeatherToday.js
 ┣ 📂 lib
 ┃ ┣ 📜 choiceCity.js
 ┃ ┣ 📜 fetchWeatherData.js
 ┃ ┣ 📜 filterDate.js
 ┃ ┗ 📜 getBackgroundStyle.js
 ┣ 📂 tests
 ┃ ┣ 📜 filterDate.test.js
 ┃ ┣ 📜 getBackgroundStyle.test.js
 ┃ ┗ 📜 searchBar.test.js
 ┣ 📂 ui
 ┃ ┣ 📜 card.css
 ┃ ┣ 📜 NotFound.css
 ┃ ┣ 📜 searchBar.css
 ┃ ┣ 📜 style.css
 ┃ ┣ 📜 weatherForecast.css
 ┃ ┗ 📜 weatherToday.css
 ┗ 📜 main.js
```

## 📂 Folder Details

### `assets/`
Contains static files such as images and icons.

### `components/`
Contains the main components of the application:
- **ForecastCharts.js**: Component for displaying weather charts.
- **NotFound.js**: Page or component displayed for a 404 error.
- **SearchBar.js**: Search bar for entering a city.
- **weatherForecast.js**: Displays weather forecasts.
- **WeatherToday.js**: Displays today's weather data.

### `lib/`
Groups utility functions:
- **choiceCity.js**: Handles city selection.
- **fetchWeatherData.js**: Fetches weather data via API.
- **filterDate.js**: Filters weather data by date.
- **getBackgroundStyle.js**: Defines styles based on weather conditions.

### `tests/`
Contains unit tests for different functionalities:
- **filterDate.test.js**: Tests the date filtering function.
- **getBackgroundStyle.test.js**: Verifies style application based on weather.
- **searchBar.test.js**: Tests the search bar.

### `ui/`
Stores CSS files for component styling:
- **card.css**: Styles for display cards.
- **NotFound.css**: Styles for the NotFound page.
- **searchBar.css**: Styles for the search bar.
- **style.css**: Global style file.
- **weatherForecast.css**: Styles for weather forecasts.
- **weatherToday.css**: Styles for today's weather display.

### `main.js`
Main application file, managing initialization and component rendering.

---
📌 **Note**: This structure may change as the project evolves. Be sure to maintain good organization for better readability and maintainability. 😊

