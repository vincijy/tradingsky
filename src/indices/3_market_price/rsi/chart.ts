import { LineColor, BandColor } from '../../def';

const plotBands = [
  {
    from: 70,
    to: 100,
    color: BandColor.lightRed,
    label: {
      text: '',
    },
  },
  {
    from: 0,
    to: 30,
    color: BandColor.lightGreen,
    label: {
      text: '',
    },
  },
];


const plotLines = [{
  value: 30,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: 50,
  color: LineColor.red,
  dashStyle: 'Dash',
  width: 2,
}, {
  value: 70,
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
      Tickmember: 11, // 允许存在的最多刻度
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
      },
      plotLines: plotLines, // 分隔线
      plotBands: plotBands, // 颜色带
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
      name: 'rsi',
      data: [],
      // 图例（红色）
      color: LineColor.lightOrange,
      yAxis: 0,
      id: 'rsi',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
    {
      id: 'sma',
      linkedTo: 'rsi',
      name: '比特币RSI',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 50,
      },
      visible: true,
      showInLegend: true,
      marker: {
        enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
      },
    },
  ],
};
