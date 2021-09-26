import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const xPlotLines = [{
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

const zones = [
  {
    value: 1,
    color: LineColor.darkGreen,
  },
  {
    color: LineColor.red,
  },
];

const plotLines = [{
  value: 1,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1.5,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  xAxis: {
    plotLines: xPlotLines,
  },
  yAxis: [
    {
      minTickInterval: 0.2, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      alignTicks: false, // 左右y轴不对齐
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      type: 'logarithmic', // 对数刻度
      className: 'highcharts-navigator-yaxis',
      labels: {
        style: { color: '#3c414c' }, // 刻度（黑色）
      },
      gridLineColor: 'rgba(240,240,240,.67)',
      plotLines: plotLines,
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
      name: 'Stock-to-Flow 模型偏差量',
      data: [],
      // 图例（红色）
      color: 'red',
      yAxis: 0,
      id: 'series0',
      visible: false,
      showInLegend: false,
      zones: zones,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
    {
      id: 'sma',
      linkedTo: 'series0',
      name: 'Stock-to-Flow 模型偏差量',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 0,
      },
      visible: true,
      showInLegend: true,
      marker: {
        enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
      },
      zones: zones,
    },
  ],
};