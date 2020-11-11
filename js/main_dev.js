let ctx = null;
let devBarBtn = null;
let devPieBtn = null;

const charts = {
  devBar: optionsDevBar,
  devPie: optionsDevPie,
};

let curChart = null;

const init = () => {
  ctx = document.getElementById("myChart").getContext("2d");

  devBarBtn = document.querySelector("#dev-bar");
  devPieBtn = document.querySelector("#dev-pie");

  devBarBtn.addEventListener("click", () => {
    console.log("devbarBtn onclick");
    if (curChart !== null) {
      curChart.destroy();
    }
    curChart = new Chart(ctx, optionsDevBar);
  });

  devPieBtn.addEventListener("click", () => {
    console.log("devPieBtn onclick");
    if (curChart !== null) {
      curChart.destroy();
    }
    curChart = new Chart(ctx, optionsDevPie);
  });

  curChart = new Chart(ctx, optionsDevBar);
};

window.addEventListener("load", init);
// window.onload = init;
