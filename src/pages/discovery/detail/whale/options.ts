export const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 200,
  },
  title: {
    text: '2018年1月浏览器市场份额',
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
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        // style: {
        //   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
        // },
      },
    },
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [],
  }],
};
