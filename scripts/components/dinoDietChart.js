import Chart  from "chart.js/auto";

/*
const data = [{
    count: 28
}, {
    count: 43
}, {
    count: 6
}]*/

const dinoPie = (element, {labels, data}) => {
    new Chart(
        element,
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