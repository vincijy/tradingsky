import { getTimeStamp } from '@utils/date';
import { LineColor, BandColor } from '../../def';

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
      // type: 'logarithmic', // 对数刻度
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
      name: '活跃地址情绪量 (Active Address Sentiment Indicator)',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'price28d',
      visible: true,
      showInLegend: true,
    },
    {
      name: '上边界',
      data: [],
      // 橙色
      color: LineColor.red,
      yAxis: 0,
      id: 'upperbollingerband',
      visible: true,
      showInLegend: true,
      dashStyle: 'ShortDash',
    },
    {
      name: '下边界',
      data: [],
      // 橙色
      color: LineColor.green,
      yAxis: 0,
      id: 'lowerbollingerband',
      visible: true,
      showInLegend: true,
      dashStyle: 'ShortDash',
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
      name: '活跃地址情绪量 (Active Address Sentiment Indicator)',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 14,
      },
      visible: true,
      showInLegend: true,
      marker: {
        enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
      },
    },
  ],
};