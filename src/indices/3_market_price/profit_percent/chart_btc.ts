import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: .5,
    color: LineColor.green,
  },
  {
    value: .95,
    color: 'rgb(247, 147, 26)',
  },
  {
    color: LineColor.red,
  },
];

const plotLines = [{
  value: .5,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,

}, {
  value: .95,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

const plotBands = [
  {
    from: .95,
    to: 1.03,
    color: BandColor.lightRed,
    label: {
      text: '',
    },
  },
  {
    from: 0,
    to: .5,
    color: BandColor.lightGreen,
    label: {
      text: '',
    },
  },
];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartBtc = {
  yAxis: [
    {
      TickInterval: 0.05, // 刻度间隔
      minTickInterval: 0.001, // 最小刻度间隔
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
        formatter: function():string {
          let percent = Number((this as any).value * 100).toFixed(1);
          percent += '%';
          return percent;
        },
      },
      gridLineColor: 'rgba(0,0,0,0.05)',
      plotLines: plotLines, // 分度线
      plotBands: plotBands, // 颜色带
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
      name: '流通盈利率',
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
      name: '流通盈利率',
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
      zones: zones,
    },
  ],
};
