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
    minColor: '#7cb5ec',
  }],
  yAxis: [
    {
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
        format: '{text} $',
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
  plotOptions: {
    line: {
      colorkey: 'daysTillHalving',
    },
  },
  series: [
    {
      name: 'daysTillHalving',
      data: [],
      colorAxis: 0,
      id: 'daysTillHalving',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ratio',
      data: [],
      type: 'line',
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'ratio',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      colorKey: 'daysTillHalving',
      lineWidth: 0,
      coloraxis: 0,
      marker: {
        enabled: true,
        radius: 2,
      },
    },
    // {
    //   type: 'sma',
    //   linkedTo: 'series0',
    //   name: 'Stock-to-Flow 模型',
    //   color: 'rgb(247, 147, 26)',
    //   yAxis: 0,
    //   params: {
    //     period: 0,
    //   },
    //   visible: true,
    //   showInLegend: true,
    //   marker: {
    //     enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
    //   },
    // },
  ],
};