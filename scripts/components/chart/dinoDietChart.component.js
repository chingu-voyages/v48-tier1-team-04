import Chart from "chart.js/auto";
import createEle from "../../utils/createEle";

/*
const data = [{
    count: 28
}, {
    count: 43
}, {
    count: 6
}]*/

const dinoPie = (parentContainer, { labels, data }) => {
  const createChart = id => createEle("canvas", null, parentContainer, null, id); // creates a canvas element, setting the ID, containing the chart
  const dietChart = createChart('dietChart');
  new Chart(
    dietChart,
    {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'diet',
            data: [data.carnivorous, data.herbivorous, data.omnivorous],
            backgroundColor: ['rgb(235, 83, 83)', 'rgb(130, 205, 71)', 'rgb(24, 116, 152)'],
            borderWidth: 5,
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  );
}

export default dinoPie
/*
const chart = new Chart(
    document.getElementById('dietChart'),
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
  );*/