import { LineColor } from '../../def';

const zones = [
  {
    value: 1,
    color: LineColor.red,
  },
  {
    color: LineColor.darkGreen,
  },
];

const plotLines = [{
  value: 1,
  color: '#5a5a5a',
  // dashStyle: 'Dot',
  width: 2,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartEth = {
  yAxis: [
    {
      minTickInterval: 0.01, // 最小刻度间隔
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
        style: { color: '#4e64bb' }, // 蓝色
      },
      gridLineColor: 'rgba(0,0,0,0.05)',
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
      gridLineWidth: 0, // 去指标grid网格背景,
    },
  ],
  series: [
    {
      name: 'spent outputs 利润率（SOPR）',
      data: [],
      // 绿色
      color: LineColor.darkGreen,
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
      name: 'spent outputs 利润率（SOPR）',
      color: LineColor.darkGreen,
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