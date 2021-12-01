export const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 450,
  },
  credits: {
    href: 'https://www.lianshucha.com/chart',
    style: {
      fontSize: '10px',
      color: '#909090',
    },
    text: 'www.lianshucha.com',

  },
  title: {
    text: '巨鲸持有占比',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<a href=https://etherscan.io/address/{point.name} target=_blank rel=noreferrer>{point.name}</a>: {point.percentage:.1f} %',
      },
    },
  },
  series: [{
    name: 'Brands',
    type: 'pie',
    innerSize: '70%',
    colors: ['#3e00f9', '#0036f9', '#2075fc', '#00b6ff', '#5bb5ff', '#6026ff', '#0dc15e', '#389bff', '#ffbf00', '#ffc700', '#7354ff', '#ff8e05', '#4921ff', '#68d6ff', '#7c51ff' ],
    colorByPoint: true,
    data: [],
  }],

};
