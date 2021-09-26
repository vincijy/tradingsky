import { LineColor } from '../../def';

const zones = [
  {
    value: 0,
    color: LineColor.red,
  },
  {
    value: 0.25,
    color: LineColor.orange,
  },
  {
    value: 0.5,
    color: LineColor.yellow,
  },
  {
    value: 0.75,
    color: LineColor.green,
  },
  {
    value: 1,
    color: LineColor.blue,
  },
];

const plotLines = [{
  value: 0,
  color: '#3c414c',
  dashStyle: 'Dot',
  width: 1.2,

}, {
  value: 0.25,
  color: '#3c414c',
  dashStyle: 'Dot',
  width: 1.2,
}, {
  value: 0.5,
  color: '#3c414c',
  dashStyle: 'Dot',
  width: 1.2,
}, {
  value: 0.75,
  color: '#3c414c',
  dashStyle: 'Dot',
  width: 1.2,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartBtc = {
  yAxis: [
    {
      TickInterval: 0.25, // 刻度间隔
      minTickInterval: 0.005, // 最小刻度间隔
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
        style: { color: '#c57514' }, // 刻度（橙色）
      },
      plotLines: plotLines, // 分度线
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
      name: '市场贪婪度',
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
      name: '市场贪婪度',
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
