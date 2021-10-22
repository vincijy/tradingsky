import { LineColor } from '../../def';
import { plotBackgroundImage } from './bg';
const plotLines = [{
  value: -.25,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: -.5,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: -.75,
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

const zones = [{
  value: -0.75,
  className: 'zone-0',
  color: LineColor.red,
}, {
  value: -0.5,
  className: 'zone-1',
  color: LineColor.lightOrange,
}, {
  value: -0.25,
  className: 'zone-2',
  color: LineColor.darkGreen,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  chart: {
    plotBackgroundImage,
  },
  yAxis: [
    {
      alignTicks: false,
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
      name: '距最高点的回撤幅度',
      data: [],
      // 橙色
      // color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'series0',
      visible: false,
      showInLegend: false,
      type: 'area', // 柱状图
      lineWidth: 0.5,
      fillOpacity: 0.6,
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
      name: '距最高点的回撤幅度',
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
