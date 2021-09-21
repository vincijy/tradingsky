import { StableAssetColor } from '../../def';

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  yAxis: [
    {
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 橙色
        style: { color: 'rgb(247, 147, 26)' },
      },
      gridLineWidth: 0, // 去指标grid网格背景
    },
    {
      // 右侧轴线
      title: {
        text: '',
      },
      opposite: true,
      align: 'left',
      type: 'logarithmic', // 对数刻度
      gridLineColor: 'rgba(240,240,240,.67)',
    },
  ],
  plotOptions: {
    area: {
      stacking: 'normal',
    },
  },
  series: [
    {
      name: 'BUSD',
      data: [],
      // 橙色
      color: StableAssetColor.BUSD,
      yAxis: 0,
      id: 'series0',
      visible: true,
      showInLegend: true,

      type: 'area',
      fillColor: 'red',
      fillOpacity: 0.75,
      stack: 0,
    },
    {
      name: 'DAI',
      data: [],
      // 橙色
      color: StableAssetColor.DAI,
      yAxis: 0,
      id: 'series1',
      visible: true,
      showInLegend: true,

      type: 'area',
      fillColor: 'green',
      fillOpacity: 0.75,
      stack: 0,
    },
    {
      name: 'EURS',
      data: [],
      // 橙色
      color: StableAssetColor.EURS,
      yAxis: 0,
      id: 'series2',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'GUSD',
      data: [],
      // 橙色
      color: StableAssetColor.GUSD,
      yAxis: 0,
      id: 'series3',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'HUSD',
      data: [],
      // 橙色
      color: StableAssetColor.HUSD,
      yAxis: 0,
      id: 'series4',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'PAX',
      data: [],
      // 橙色
      color: StableAssetColor.PAX,
      yAxis: 0,
      id: 'series5',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'SAI',
      data: [],
      // 橙色
      color: StableAssetColor.SAI,
      yAxis: 0,
      id: 'series6',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'USDC',
      data: [],
      // 橙色
      color: StableAssetColor.USDC,
      yAxis: 0,
      id: 'series7',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'USDT',
      data: [],
      // 橙色
      color: StableAssetColor.USDT,
      yAxis: 0,
      id: 'series8',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'sUSD',
      data: [],
      // 橙色
      color: StableAssetColor.sUSD,
      yAxis: 0,
      id: 'series9',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    // TOOD: 先不放上去, 有点问题
    // {
    //   name: '价格',
    //   data: [],
    //   color: 'rgba(0,0,0,0.5)',
    //   yAxis: 1,
    // },
    // {
    //   type: 'sma',
    //   linkedTo: 'series0',
    //   name: '稳定币累计流通量',
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
