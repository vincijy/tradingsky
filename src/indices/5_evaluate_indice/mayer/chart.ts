import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: 0.55,
    color: LineColor.red,
  },
  {
    value: 1.1,
    color: LineColor.orange,
  },
  {
    value: 1.7,
    color: LineColor.yellow,
  },
  {
    value: 2.5,
    color: LineColor.green,
  },
  {
    value: 19,
    color: LineColor.blue,
  },
];
const plotLines = [{
  value: 0.55,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,

}, {
  value: 1.1,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 1.7,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 2.5,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];


/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  yAxis: [
    {
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
        style: { color: '#c57514' }, // 刻度（橙色）
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
      name: 'mayer',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'mayer',
      visible: true,
      showInLegend: true,
      zones: zones,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },

  ],
};