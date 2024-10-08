import { LineColor } from '../../def';

const plotLines = [{
  value: 0,
  color: '#5a5a5a',
  width: 2,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartEth = {
  yAxis: [
    {
      TickInterval: 0.5, // 刻度间隔
      minTickInterval: 0.01, // 最小刻度间隔
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
        style: { color: 'r#3c414c' },
        formatter: function():string {
          let percent = Number((this as any).value * 100).toFixed(0);
          percent += '%';
          return percent;
        },
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
      gridLineWidth: 0, // 去指标grid网格背景
    },
  ],
  series: [
    {
      name: '灰度基金溢价',
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
      id: 'sma',
      linkedTo: 'series0',
      name: '灰度基金溢价',
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
