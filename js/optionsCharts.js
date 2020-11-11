const optionsDevBar = {
  type: "bar",
  data: {
    labels: [
      "ASP.NET Core",
      "React.js",
      "Vue.js",
      "Express",
      "Gatsby",
      "Spring",
      "Django",
      "Flask",
      "Angular",
      "Laravel",
      "Ruby on Rails",
      "Symfony",
    ],
    datasets: [
      {
        label: "Most loved",
        data: [
          70.7,
          68.9,
          66.0,
          61.9,
          60.7,
          57.7,
          55.3,
          54.4,
          54.0,
          51.4,
          49.3,
          45.6,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(51, 51, 51, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
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
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(51, 51, 51, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
};

const optionsDevPie = {
  type: "doughnut",
  data: {
    labels: ["Men", "Women", "Non-binary"],
    datasets: [
      {
        label: "Genders",
        data: [91.5, 8.0, 1.2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(51, 51, 51, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(51, 51, 51, 1)",
        ],
      },
    ],
  },
};
