import { getTimeStamp } from '@utils/date';
import { LineColor, BandColor } from '../../def';

const plotBands = [
  {
    color: '#F8B0A3',
    from: getTimeStamp({
      year: 2013,
      month: 4,
      day: 5,
    }),
    to: getTimeStamp({
      year: 2013,
      month: 4,
      day: 8,
    }),
  }, {
    color: '#F8B0A3',
    from: getTimeStamp({
      year: 2013,
      month: 12,
      day: 3,
    }),
    to: getTimeStamp({
      year: 2013,
      month: 12,
      day: 6,
    }),
  }, {
    color: '#F8B0A3',
    from: getTimeStamp({
      year: 2017,
      month: 12,
      day: 17,
    }),
    to: getTimeStamp({
      year: 2017,
      month: 12,
      day: 20,
    }),
  }, {
    color: '#F8B0A3',
    from: getTimeStamp({
      year: 2021,
      month: 3,
      day: 19,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 3,
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
      name: '350MA * 2',
      data: [],
      // 橙色
      color: '#0485d1',
      yAxis: 0,
      id: 'ma_365_2', // TODO: 名字需要协同后端接口一起修复
      visible: true,
      showInLegend: true,
    },
    {
      name: '111MA',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'ma_111',
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