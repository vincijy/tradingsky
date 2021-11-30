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
    colorByPoint: true,
    data: [],
  }],

};
