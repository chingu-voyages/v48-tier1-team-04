import Chart from "chart.js/auto";
import createEle from "../../utils/createEle";
import calculateDiet from "../../utils/chartHelpers.js";

/*
const data = [{
    count: 28
}, {
    count: 43
}, {
    count: 6
}]*/
// generates the charts section -vinc
const renderCharts = () => {

  const innerHTML = `
  <div class="charts-container flex">
    <canvas id="dietChart">
    </canvas>
    <canvas id="eraChart">
    </canvas>
  </div>
  `;
  const dinoDiet = calculateDiet();
  // create a section, appends the charts-container is the parent container holding the chart
  const section = createEle('section', innerHTML, document.querySelector('main'), "section-features", 'charts');
  // create a new chart, where the <canvas> of id: 'dietChart'
  new Chart(
    document.querySelector('#dietChart'),
    {
      type: 'pie',
      data: {
        labels: ["carnivorous", "herbivorous", "omnivorous"],
        datasets: [
          {
            label: 'diet',
            data: [dinoDiet.carnivorous, dinoDiet.herbivorous, dinoDiet.omnivorous]
          }
        ]
      }
    }
  );
  new Chart(
    document.querySelector('#eraChart'),
    {
      type: 'pie',
      data: {
        labels: ["carnivorous", "herbivorous", "omnivorous"],
        datasets: [
          {
            label: 'diet',
            data: [dinoDiet.carnivorous, dinoDiet.herbivorous, dinoDiet.omnivorous]
          }
        ]
      }
    }
  );
  return section;
}

const dinoPie = (parentContainer, { labels, data }) => {
  const createChart = id => createEle("canvas", null, parentContainer, null, id);

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
            data: [data.carnivorous, data.herbivorous, data.omnivorous]
          }
        ]
      }
    }
  );
}



export default renderCharts
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