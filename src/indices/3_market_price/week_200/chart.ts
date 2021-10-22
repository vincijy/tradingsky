import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const plotBands = [
  {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2011,
      month: 10,
      day: 1,
    }),
    to: getTimeStamp({
      year: 2012,
      month: 1,
      day: 3,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2014,
      month: 12,
      day: 19,
    }),
    to: getTimeStamp({
      year: 2015,
      month: 10,
      day: 22,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2018,
      month: 11,
      day: 19,
    }),
    to: getTimeStamp({
      year: 2019,
      month: 4,
      day: 2,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 2,
      day: 27,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 4,
      day: 22,
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
      type: 'logarithmic', // 对数刻度
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
      name: '200周均线',
      data: [],
      // 图例（红色）
      color: LineColor.orange,
      yAxis: 0,
      id: 'x200_week',
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
