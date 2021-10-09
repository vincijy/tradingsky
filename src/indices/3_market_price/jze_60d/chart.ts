import { LineColor, BandColor } from '../../def';


const plotLines = [{
  value: 100,
  color: LineColor.red,
  dashStyle: 'Dash',
  width: 2,
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
      name: 'jze_60d',
      data: [],
      // 图例（红色）
      color: LineColor.lightOrange,
      yAxis: 0,
      id: 'jze_60d',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
  ],
};
