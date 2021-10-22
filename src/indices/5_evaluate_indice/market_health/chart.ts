import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: 150000,
    color: 'rgb(247, 147, 26)',
  },
  {
    value: 250000,
    color: LineColor.green,
  },
  {
    color: 'rgb(247, 147, 26)',
  },
];

const plotLines = [{
  value: 150000,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,

}, {
  value: 250000,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 1000000,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 2,
}];

const plotBands = [
  {
    from: 150000,
    to: 250000,
    color: BandColor.lightGreen,
    label: {
      text: '',
    },
  },
];

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
      gridLineColor: 'rgba(0,0,0,0.05)',
      plotLines: plotLines,
      plotBands: plotBands,
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
      name: '市场健康程度',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
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
      name: '市场健康程度',
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