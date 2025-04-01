export const getBackgroundStyle = (weatherBackground) => {
    const backgrounds = {
      clear: "background: linear-gradient(to bottom right, #60a5fa, #2563eb);",
      clouds: "background: linear-gradient(to bottom right, #d1d5db, #60a5fa);",
      rain: "background: linear-gradient(to bottom right, #6b7280, #1e40af);",
      thunderstorm: "background: linear-gradient(to bottom right, #374151, #4c1d95);",
      snow: "background: linear-gradient(to bottom right, #e0f2fe, #93c5fd);",
      mist: "background: linear-gradient(to bottom right, #d1d5db, #6b7280);",
    };
  
    return backgrounds[weatherBackground] || backgrounds.clear;
  };
  
  