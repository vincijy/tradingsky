import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const plotBands = [
  {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2011,
      month: 4,
      day: 18,
    }),
    to: getTimeStamp({
      year: 2011,
      month: 8,
      day: 11,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2013,
      month: 2,
      day: 5,
    }),
    to: getTimeStamp({
      year: 2013,
      month: 6,
      day: 12,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2013,
      month: 11,
      day: 4,
    }),
    to: getTimeStamp({
      year: 2014,
      month: 1,
      day: 27,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2017,
      month: 5,
      day: 25,
    }),
    to: getTimeStamp({
      year: 2018,
      month: 2,
      day: 20,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2020,
      month: 11,
      day: 18,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 4,
      day: 15,
    }),
  },
];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  xAxis: {
    plotBands: plotBands,
  },
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
        // 橙色
        style: { color: '#c57514' }, // 刻度（橙色）
      },
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
      name: '长期持有者抛售趋势',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'series0',
      visible: false,
      showInLegend: false,
      type: 'column',
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
      name: '长期持有者抛售趋势',
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
    },
  ],
};