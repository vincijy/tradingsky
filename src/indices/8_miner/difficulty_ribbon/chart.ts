import { getTimeStamp } from '@utils/date';
import { LineColor, BandColor } from '../../def';

const plotLines = [{
  value: getTimeStamp({
    year: 2012,
    month: 11,
    day: 28,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: getTimeStamp({
    year: 2016,
    month: 7,
    day: 10,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: getTimeStamp({
    year: 2020,
    month: 5,
    day: 12,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

const plotBands = [
  {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2011,
      month: 9,
      day: 16,
    }),
    to: getTimeStamp({
      year: 2012,
      month: 2,
      day: 3,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2012,
      month: 12,
      day: 26,
    }),
    to: getTimeStamp({
      year: 2013,
      month: 2,
      day: 20,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2015,
      month: 4,
      day: 18,
    }),
    to: getTimeStamp({
      year: 2015,
      month: 9,
      day: 20,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2016,
      month: 8,
      day: 4,
    }),
    to: getTimeStamp({
      year: 2016,
      month: 8,
      day: 29,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2018,
      month: 11,
      day: 15,
    }),
    to: getTimeStamp({
      year: 2019,
      month: 5,
      day: 15,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 3,
      day: 26,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 4,
      day: 30,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 5,
      day: 25,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 7,
      day: 13,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 11,
      day: 3,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 1,
      day: 9,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2021,
      month: 5,
      day: 30,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 9,
      day: 22,
    }),
  },
];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {

  xAxis: {
    plotLines: plotLines,
    plotBands: plotBands,
  },
  yAxis: [
    {
      TickInterval: 0.1, // 刻度间隔
      minTickInterval: 1, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      tickPixelInterval: 15,
      alignTicks: false, // 左右y轴不对齐
      // min: 0,
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        style: { color: '#3c414c' }, // 刻度（黑色）
      },
      type: 'logarithmic', // 对数刻度
      gridLineColor: 'rgba(0,0,0,0.05)',
    },
    {
      // 右侧轴线
      title: {
        text: '',
      },
      opposite: true,
      align: 'left',
      type: 'logarithmic', // 对数刻度
      gridLineWidth: 0, // 去指标grid网格背景
    },
  ],
  series: [
    {
      name: 'ma200',
      data: [],
      // 红色
      color: '#e50000',
      yAxis: 0,
      id: 'ma200',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma128',
      data: [],
      // 橙色
      color: '#f97306',
      yAxis: 0,
      id: 'ma128',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma90',
      data: [],
      // 橙色
      color: '#fbdd7e',
      yAxis: 0,
      id: 'ma90',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma60',
      data: [],
      // 绿色
      color: '#98FB98',
      yAxis: 0,
      id: 'ma60',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma40',
      data: [],
      // 绿色
      color: '#15b01a',
      yAxis: 0,
      id: 'ma40',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma25',
      data: [],
      // 绿色
      color: '#6495ed',
      yAxis: 0,
      id: 'ma25',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma14',
      data: [],
      // 蓝色
      color: '#0343df',
      yAxis: 0,
      id: 'ma14',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma9',
      data: [],
      // 蓝色
      color: '#0504aa',
      yAxis: 0,
      id: 'ma9',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
  //   {
  //     id: 'sma',
  //     linkedTo: 'series0',
  //     name: '',
  //     color: 'rgb(247, 147, 26)',
  //     yAxis: 0,
  //     params: {
  //       period: 7,
  //     },
  //     visible: true,
  //     showInLegend: true,
  //     marker: {
  //       enabled: true, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
  //     },
  //   },
  ],
};