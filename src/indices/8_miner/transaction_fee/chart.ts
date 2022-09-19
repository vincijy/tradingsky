import { getTimeStamp } from '@utils/date';
import { LineColor, BandColor } from '../../def';

const plotLines:any = [{
  value: getTimeStamp({
    year: 2012,
    month: 11,
    day: 28,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: getTimeStamp({
    year: 2016,
    month: 7,
    day: 10,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}, {
  value: getTimeStamp({
    year: 2020,
    month: 5,
    day: 12,
  }),
  color: '#5a5a5a',
  dashStyle: 'Dot',
  width: 1,
}];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  xAxis: [{
    plotLines: plotLines,
  }],
  yAxis: [
    {
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
      name: '矿工交易费收入占比',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'series0',
      visible: false,
      showInLegend: false,
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
      name: '矿工交易费收入占比',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 7,
      },
      visible: true,
      showInLegend: true,
      marker: {
        enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
      },
    },
  ],
};