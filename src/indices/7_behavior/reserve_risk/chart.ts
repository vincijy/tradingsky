import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: 0.002,
    color: LineColor.green,
  },
  {
    value: 0.02,
    color: 'rgb(247, 147, 26)',
  },
  {
    value: 0.08,
    color: LineColor.red,
  },
];

const plotLines = [{
  value: 0.001,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 0.002,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 0.02,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 0.08,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

const plotBands = [
  {
    from: 0.001,
    to: 0.002,
    color: BandColor.lightGreen,
    label: {
      text: '',
    },
  },
  {
    from: 0.02,
    to: 0.08,
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
      name: '储备风险(Reserve Risk)',
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
      name: '储备风险(Reserve Risk)',
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
