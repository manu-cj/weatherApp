import Chart from "chart.js/auto";

export const ForecastCharts = (container, data) => {
  const canvas = document.createElement("canvas");
  canvas.id = "temperatureChart";
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const labels = data.map(item =>
    new Date(item.dt * 1000).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
  );
  const temperatures = data.map(item => item.main.temp);

  // Créer un nouveau graphique
  window.temperatureChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Température (°C)",
        data: temperatures,
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: "Heure" } },
        y: { title: { display: true, text: "Température (°C)" }, beginAtZero: false }
      }
    }
  });
};
