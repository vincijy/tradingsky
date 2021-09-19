
/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartEth = {
  yAxis: [
    {
      TickInterval: 500, // 刻度间隔
      minTickInterval: 10, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      alignTicks: false, // 左右y轴不对齐
      Tickmember: 12, // 允许存在的最多刻度
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      opposite: false,
      className: 'highcharts-navigator-yaxis',
      labels: {
        // 蓝色
        style: { color: '#0d75f8' },
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
  series: [
    {
      name: '巨鲸地址数量（>1k）',
      data: [],
      // 蓝色
      color: '#0d75f8',
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
      type: 'sma',
      linkedTo: 'series0',
      name: '巨鲸地址数量（>1k）',
      color: '#0d75f8',
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
