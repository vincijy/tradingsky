import { LineColor } from '../../def';

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
      TickInterval: 500, // 刻度间隔
      minTickInterval: 10, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      alignTicks: false, // 左右y轴不对齐
      Tickmember: 12, // 允许存在的最多刻度
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 橙色
        style: { color: '#3c414c' },
        gridLineColor: 'rgba(240,240,240,.67)',
      },
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
      name: 'Purpose Bitcoin ETF净流量',
      data: [],
      color: LineColor.darkGreen,
      negativeColor: LineColor.red,
      yAxis: 0,
      id: 'series0',
      visible: false,
      showInLegend: false,
      type: 'column', // 柱状图
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
      name: 'Purpose Bitcoin ETF净流量',
      color: LineColor.darkGreen,
      negativeColor: LineColor.red,
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
