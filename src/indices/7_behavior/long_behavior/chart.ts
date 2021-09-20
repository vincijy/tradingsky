// 个性化样式：600k—700k红色阴影带；100k—300k绿色阴影带
import { BandColor } from '@/indices/def';
const plotBands = [
  {
    from: 600 * 1000,
    to: 700 * 1000,
    color: BandColor.lightRed,
    label: {
      text: '',
    },
  },
  {
    from: 100 * 1000,
    to: 300 * 1000,
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
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 橙色
        style: { color: 'rgb(247, 147, 26)' },
      },
      gridLineWidth: 0, // 去指标grid网格背景
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
      gridLineColor: 'rgba(240,240,240,.67)',
    },
  ],
  series: [
    {
      name: '',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'series0',
      visible: false,
      showInLegend: false,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
    {
      type: 'sma',
      linkedTo: 'series0',
      name: '',
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
    },
  ],
};