import Chart  from "chart.js/auto";

const data = [{
    count: 28
}, {
    count: 43
}, {
    count: 6
}]

const chart = new Chart(
    document.getElementById('dino-diet-chart'),
    {
      type: 'pie',
      data: {
        labels: ['carnivorous', 'herbivorous', 'omnivorous'],
        datasets: [
          {
            label: 'diet',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );