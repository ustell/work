let columns = {
  categories: ['Категория 1', 'Категория 2', 'Категория 3'],
  values: [25, 40, 30],
};

let options = {
  chart: {
    type: 'area',
  },
  series: [
    {
      name: 'Значения',
      data: columns.values,
    },
  ],
  xaxis: {
    categories: columns.categories,
  },
};

let chart = new ApexCharts(document.getElementById('Content'), options);

chart.render();
