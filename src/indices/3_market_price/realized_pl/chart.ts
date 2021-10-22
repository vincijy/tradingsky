import { LineColor } from '../../def';

const zones = [
  {
    value: 0,
    color: LineColor.red,
  },
  {
    color: LineColor.darkGreen,
  },
];

const plotLines = [{
  value: 0,
  color: '#5a5a5a',
  width: 2,

}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  yAxis: [
    {
      TickInterval: 500000000, // 刻度间隔
      minTickInterval: 10000000, // 最小刻度间隔
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
        format: '{text} $',
      },
      plotLines: plotLines, // 分隔线
      gridLineColor: 'rgba(0,0,0,0.05)',
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
      name: '已实现净损益',
      data: [],
      // 图例（红色）
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
      name: '已实现净损益',
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
