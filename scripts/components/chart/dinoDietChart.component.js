import "./dinoChart-styles.scss";
import Chart from "chart.js/auto";
import createEle from "../../utils/createEle";
//import calculateDiet from "../../utils/chartHelpers.js";
import {calculateEra, calculateDiet}  from "../../utils/chartHelpers.js";
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
  <h2 class="heading-secondary u-text-center charts__heading">Dinosaur Charts</h2>
  <div class="charts-container flex wrap">
    <div>
    <canvas id="dietChart">
    </div>
    <div>
    <canvas id="eraChart">
    </canvas>
    </div>
    
  </div>
  `;
  const dinoDiet = calculateDiet();
  const dinoEra = calculateEra();
  // create a section, appends the charts-container is the parent container holding the chart
  const section = createEle('section', innerHTML, document.querySelector('main'), "section-features section-charts", 'charts');
  // create a new chart, where the <canvas> of id: 'dietChart'
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right'
      }
    }
  }
  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'right'
      }
    }
  }
  new Chart(
    document.querySelector('#dietChart'),
    {
      type: 'pie',
      data: {
        labels: ["carnivorous", "herbivorous", "omnivorous"],
        datasets: [
          {
            label: 'diet',
            data: [dinoDiet.carnivorous, dinoDiet.herbivorous, dinoDiet.omnivorous],
            backgroundColor: ['#D04848', '#82CD47', '#3081D0']
          },

        ]
      },
      options
    }
  );
  new Chart(
    document.querySelector('#eraChart'),
    {
      type: 'bar',
      data: {
        labels: ["cretaceous", "jurassic", "triassic"],
        datasets: [
          {
            label: 'era',
            data: [dinoEra.cretaceous, dinoEra.jurassic, dinoEra.triassic],
            backgroundColor: ['#A8CD9F', '#58A399', '#496989'],
            borderColor: '#36A2EB',

          }
        ]
      },
      options: optionsBar

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