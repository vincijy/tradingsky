import { getTimeStamp } from '@/utils/date';
import { LineColor, BandColor } from '../../def';

const plotLines = [{
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

const plotBands = [
  {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2011,
      month: 9,
      day: 2,
    }),
    to: getTimeStamp({
      year: 2011,
      month: 12,
      day: 28,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2012,
      month: 4,
      day: 25,
    }),
    to: getTimeStamp({
      year: 2012,
      month: 5,
      day: 7,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2012,
      month: 6,
      day: 7,
    }),
    to: getTimeStamp({
      year: 2012,
      month: 6,
      day: 18,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2012,
      month: 12,
      day: 19,
    }),
    to: getTimeStamp({
      year: 2013,
      month: 2,
      day: 2,
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
      month: 1,
      day: 2,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2015,
      month: 4,
      day: 27,
    }),
    to: getTimeStamp({
      year: 2015,
      month: 5,
      day: 29,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2016,
      month: 7,
      day: 31,
    }),
    to: getTimeStamp({
      year: 2016,
      month: 8,
      day: 22,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2018,
      month: 10,
      day: 31,
    }),
    to: getTimeStamp({
      year: 2019,
      month: 1,
      day: 1,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2019,
      month: 11,
      day: 19,
    }),
    to: getTimeStamp({
      year: 2019,
      month: 12,
      day: 22,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 3,
      day: 2,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 4,
      day: 24,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 5,
      day: 24,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 6,
      day: 24,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2020,
      month: 10,
      day: 29,
    }),
    to: getTimeStamp({
      year: 2020,
      month: 12,
      day: 3,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2021,
      month: 4,
      day: 27,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 5,
      day: 18,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2021,
      month: 4,
      day: 27,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 5,
      day: 18,
    }),
  }, {
    color: BandColor.lightGreen,
    from: getTimeStamp({
      year: 2021,
      month: 6,
      day: 3,
    }),
    to: getTimeStamp({
      year: 2021,
      month: 8,
      day: 8,
    }),
  },
];

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  xAxis: {
    plotLines: plotLines,
    plotBands: plotBands,
  },
  yAxis: [
    {
      TickInterval: 1, // 刻度间隔
      minTickInterval: 1, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      tickPixelInterval: 15,
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
        style: { color: '#3c414c' }, // 刻度（黑色）
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
      name: 'ma30',
      data: [],
      // 绿色
      color: '#00e376',
      yAxis: 0,
      id: 'ma30',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'ma60',
      data: [],
      // 蓝色
      color: '#4478f4',
      yAxis: 0,
      id: 'ma60',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
    // {
    //   id: 'sma',
    //   linkedTo: 'series0',
    //   name: '哈希带',
    //   color: 'rgb(247, 147, 26)',
    //   yAxis: 0,
    //   params: {
    //     period: 0,
    //   },
    //   visible: true,
    //   showInLegend: true,
    //   marker: {
    //     enabled: false, // https://stackoverflow.com/questions/14642779/highcharts-how-can-i-turn-off-the-points
    //   },
    // },
  ],
};