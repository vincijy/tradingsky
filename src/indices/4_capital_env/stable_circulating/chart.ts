import { StableAssetColor } from '../../def';
// busd?:number;
// dai?:number;
// eurs?:number;
// gusd?:number;
// husd?:number;
// pax?:number;
// sai?:number;
// susd?:number;
// usdc?:number;
// usdt?:number;

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartBtc = {
  chart: {
    type: 'area',
  },
  yAxis: [
    {
      zoomEnabled: true, // 允许缩放
      alignTicks: false, // 左右y轴不对齐
      Tickmember: 12, // 允许存在的最多刻度
      tickPixelInterval: 50,
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
      // gridLineColor: 'rgba(240,240,240,.67)',
      gridLineWidth: 0, // 去指标grid网格背景
    },
    {
      // 右侧轴线
      title: {
        text: '',
      },
      zoomEnabled: true, // 允许缩放
      opposite: true,
      align: 'left',
      type: 'logarithmic', // 对数刻度
      gridLineWidth: 0, // 去指标grid网格背景
    },
  ],
  plotOptions: {
    area: {
      stacking: 'normal',
      lineWidth: 0,
      yAxis: 0,
      marker: {
        lineWidth: 0.3,
        lineColor: '#ffffff',
      },
    },
  },
  series: [
    {
      name: 'busd',
      data: [],
      color: StableAssetColor.SAI,
      yAxis: 0,
      id: 'busd',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'dai',
      data: [],
      // 橙色
      color: StableAssetColor.EURS,
      yAxis: 0,
      id: 'dai',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'eurs',
      data: [],
      // 橙色
      color: StableAssetColor.DAI,
      yAxis: 0,
      id: 'eurs',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'gusd',
      data: [],
      // 橙色
      color: StableAssetColor.GUSD,
      yAxis: 0,
      id: 'gusd',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'husd',
      data: [],
      // 橙色
      color: StableAssetColor.HUSD,
      yAxis: 0,
      id: 'husd',
      visible: true,
      showInLegend: true,
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
    },
    {
      name: 'pax',
      data: [],
      // 橙色
      color: StableAssetColor.PAX,
      yAxis: 0,
      id: 'pax',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'sai',
      data: [],
      // 橙色
      color: StableAssetColor.BUSD,
      yAxis: 0,
      id: 'sai',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'susd',
      data: [],
      // 橙色
      color: StableAssetColor.USDC,
      yAxis: 0,
      id: 'susd',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'usdc',
      data: [],
      // 橙色
      color: StableAssetColor.USDT,
      yAxis: 0,
      id: 'usdc',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    {
      name: 'usdt',
      data: [],
      // 橙色
      color: StableAssetColor.sUSD,
      yAxis: 0,
      id: 'usdt',
      visible: true,
      showInLegend: true,
      type: 'area',
      stack: 0,
    },
    // TODO: 确认开启崩溃的原因
    // {
    //   name: '价格',
    //   data: [],
    //   color: 'rgba(0,0,0,0.5)',
    //   yAxis: 1,
    // },
  ],
};
