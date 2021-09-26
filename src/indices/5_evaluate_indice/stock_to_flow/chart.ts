import { getTimeStamp } from '@/utils/date';
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
}, {
  value: getTimeStamp({
    year: 2024,
    month: 3,
    day: 20,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

console.log(plotLines, 'plotLines');

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartBtc = {
  xAxis: {
    plotLines: plotLines,
  },
  colorAxis: [{
    layout: 'horizontal',
    min: 0,
    max: 1400,
    stops: [
      [0, 'rgb(68, 103, 235)'],
      [0.25, 'rgb(38, 200, 17)'],
      [0.5, 'rgb(245, 219, 76)'],
      [0.75, 'rgb(247, 132, 16)'],
      [1, 'rgb(235, 68, 68)'],
    ],
  }],
  yAxis: [
    {
      TickInterval: 0.1, // 刻度间隔
      minTickInterval: 1, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      // tickPixelInterval: 15,
      alignTicks: false, // 左右y轴不对齐
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 橙色
        style: { color: '#3c414c' }, // 刻度（黑色）
        format: '{text}$',
      },
      type: 'logarithmic', // 对数刻度
      gridLineColor: 'rgba(240,240,240,.67)',
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
      name: 'daysTillHalving',
      data: [],
      colorAxis: 0,
      id: 'daysTillHalving',
      visible: false,
      showInLegend: false,
    },
    {
      name: 'ratio',
      data: [],
      type: 'line',
      color: '#3c414c',
      yAxis: 0,
      id: 'ratio',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      colorKey: 'colorValue',
      lineWidth: 0,
      coloraxis: 0,
      marker: {
        enabled: true,
        radius: 2,
      },
    },
  ],
};
