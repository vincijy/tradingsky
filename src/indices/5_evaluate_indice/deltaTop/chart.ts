import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const plotBands = [
  {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2011,
      month: 1,
      day: 31,
    }),
    to: getTimeStamp({
      year: 2011,
      month: 3,
      day: 5,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2011,
      month: 4,
      day: 22,
    }),
    to: getTimeStamp({
      year: 2011,
      month: 7,
      day: 20,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2013,
      month: 3,
      day: 19,
    }),
    to: getTimeStamp({
      year: 2013,
      month: 4,
      day: 14,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2013,
      month: 11,
      day: 8,
    }),
    to: getTimeStamp({
      year: 2014,
      month: 1,
      day: 11,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2017,
      month: 12,
      day: 2,
    }),
    to: getTimeStamp({
      year: 2017,
      month: 12,
      day: 23,
    }),
  }, {
    color: BandColor.lightRed,
    from: getTimeStamp({
      year: 2021,
      month: 1,
      day: 8,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 3,
      day: 14,
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
      TickInterval: 0.2, // 刻度间隔
      minTickInterval: 0.1,
      tickPixelInterval: 40,
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
        style: { color: '#3c414c' }, // 刻度（橙色）
      },
      type: 'logarithmic', // 对数刻度
      gridLineColor: 'rgba(0,0,0,0.05)',
    },
  ],
  series: [
    {
      name: 'Delta顶部指标',
      data: [],
      // 橙色
      color: LineColor.lightOrange,
      yAxis: 0,
      id: 'value_delta_top',
      visible: true,
      showInLegend: true,
    },

    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 0,
    },
  ],
};