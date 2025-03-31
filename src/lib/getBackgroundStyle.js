export const getBackgroundStyle = (weatherBackground) => {
    const backgrounds = {
      clear: "background: linear-gradient(to bottom right, #87CEEB, #4682B4);",
      clouds: "background: linear-gradient(to bottom right, #B0C4DE, #778899);",
      rain: "background: linear-gradient(to bottom right, #708090, #2F4F4F);", 
      thunderstorm: "background: linear-gradient(to bottom right, #4B0082, #000000);", 
      snow: "background: linear-gradient(to bottom right, #ADD8E6, #5F9EA0);", 
      mist: "background: linear-gradient(to bottom right, #C0C0C0, #A9A9A9);", 
    };
  
    return backgrounds[weatherBackground] || backgrounds.clear;
  };
  
  