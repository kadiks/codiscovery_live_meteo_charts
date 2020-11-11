// Paris: 615702
// Bxl: 968019
// Marseille: 610264
let ctx = null;
let buttonEls = null;
let curChart = null;

const init = async () => {
  ctx = document.querySelector("canvas").getContext("2d");

  buttonEls = document.querySelector(".buttons");

  buttonEls.addEventListener("click", async ({ target }) => {
    // HTML: data-city-id
    // DOM: el.dataset.cityId
    console.log("on click");
    const cityId = target.dataset.cityId;
    loadByCityId(cityId);
  });

  const cityId = document.querySelector(".buttons button").dataset.cityId;
  loadByCityId(cityId);
};

const loadByCityId = async (cityId) => {
  document.querySelector("h1").innerText = "Loading...";
  if (curChart !== null) {
    curChart.destroy();
  }
  const data = await getDataFromCityId(cityId);
  const chartData = getChartFromWeather(data);
  console.log(chartData);

  curChart = new Chart(ctx, chartData);
  document.querySelector("h1").innerText = `Météo à ${data[0].city}`;
};

const getChartFromWeather = (data) => {
  return {
    type: "bar",
    data: {
      labels: data.map((d) => d.day),
      datasets: [
        {
          label: "Temperature",
          data: data.map((d) => d.temperature),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(51, 51, 51, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(51, 51, 51, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
        {
          type: "line",
          label: "Humidité",
          data: data.map((d) => d.humidity),
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
};

const getDataFromCityId = async (cityId) => {
  console.log("#getDataFromCityId");
  const res = await fetch(
    `https://codiscovery-meteo.herokuapp.com/api/location/${cityId}/`
  );
  const json = await res.json();

  console.log("json", json);

  const data = json.consolidated_weather.map((weather) => {
    // console.log("weather", weather);
    const day = new Date(weather.applicable_date).toLocaleDateString("fr-FR", {
      weekday: "long",
    });

    const temperature = parseInt(weather.the_temp);
    const humidity = weather.humidity;

    return {
      city: json.title,
      day,
      temperature,
      humidity,
    };
  });

  console.log("data", data);

  return data;
};

window.addEventListener("load", init);
