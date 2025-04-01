export const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Données reçues"), 1000);
    });
  };