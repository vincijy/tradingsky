import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const plotBands = [
  {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2011,
      month: 9,
      day: 8,
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
      month: 3,
      day: 11,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 3,
      day: 19,
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
      type: 'logarithmic', // 对数刻度
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
      name: 'v_cvdd',
      data: [],
      // 橙色
      color: '#0485d1',
      yAxis: 0,
      id: 'v_cvdd',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'v_pru',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'v_pru',
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