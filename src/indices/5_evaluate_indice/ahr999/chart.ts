import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const zones = [
  {
    value: .45,
    color: LineColor.green,
  },
  {
    value: 1.2,
    color: LineColor.yellow,
  },
  {
    color: 'rgb(247, 147, 26)',
  },
];

const plotLines = [{
  value: .45,
  color: '#3c414c',
  dashStyle: 'Dot',
  width: 1.2,

}, {
  value: 1.2,
  color: '#3c414c',
  dashStyle: 'Dot',
  width: 1.2,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  yAxis: [
    {
      zoomEnabled: true, // 允许缩放
      // TickInterval: 0.1, // 刻度间隔
      // minTickInterval: 0.1,
      // Tickmember: 13, // 允许存在的最多刻度
      alignTicks: false, // 左右y轴不对齐
      tickPosition: 'outside',
      tickmarkPlacement: 'on',
      // 左侧轴
      title: {
        text: '',
      },
      align: 'left',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 橙色
        style: { color: '#c57514' }, // 刻度（橙色）
      },
      type: 'logarithmic', // 对数刻度
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
      name: 'ahr999',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'arh999',
      visible: true,
      showInLegend: true,
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
      name: 'arh999',
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