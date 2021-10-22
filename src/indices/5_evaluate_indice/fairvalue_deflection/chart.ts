import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: -.8,
    color: 'rgb(247, 147, 26)',
  },
  {
    value: .3,
    color: LineColor.green,
  },
  {
    value: 7,
    color: 'rgb(247, 147, 26)',
  },
  {
    value: 12,
    color: LineColor.red,
  },
];

const plotLines = [{
  value: -.8,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,

}, {
  value: .3,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 7,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,

}, {
  value: 11,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

const plotBands = [
  {
    from: -.8,
    to: .3,
    color: BandColor.lightGreen,
    label: {
      text: '',
    },
  },
  {
    from: 7,
    to: 11,
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
      minTickInterval: 0.02, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      alignTicks: false, // 左右y轴不对齐
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
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
      name: '公允价值偏差量',
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
      name: '公允价值偏差量',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 7,
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