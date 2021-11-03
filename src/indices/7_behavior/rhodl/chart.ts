import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: 300,
    color: LineColor.green,
  },
  {
    value: 50000,
    color: 'rgb(247, 147, 26)',
  },
  {
    value: 230000,
    color: LineColor.red,
  },
];

const plotLines = [{
  value: 300,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 50000,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 230000,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

const plotBands = [
  {
    from: 70,
    to: 300,
    color: BandColor.lightGreen,
    label: {
      text: '',
    },
  },
  {
    from: 50000,
    to: 230000,
    color: BandColor.lightRed,
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
      TickInterval: 0.2, // 刻度间隔
      minTickInterval: 0.1,
      tickPixelInterval: 40,
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
        style: { color: '#c57514' }, // 刻度（橙色）
      },
      type: 'logarithmic', // 对数刻度
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
      name: 'RHODL指标',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'behavior_rhodl',
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
    {
      id: 'sma',
      linkedTo: 'behavior_rhodl',
      name: 'RHODL指标',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 0,
      },
      visible: true,
      showInLegend: false,
      marker: {
        enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
      },
      zones: zones,
    },
  ],
};