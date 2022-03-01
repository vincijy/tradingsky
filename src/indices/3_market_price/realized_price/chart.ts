
/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chart = {
  yAxis: [
    {
      // TickInterval: 0.025, // 刻度间隔
      // minTickInterval: 0.0002, // 最小刻度间隔
      zoomEnabled: true, // 允许缩放
      alignTicks: false, // 左右y轴不对齐
      Tickmember: 12, // 允许存在的最多刻度
      // 左侧轴
      title: {
        text: '',
      },
      align: 'right',
      type: 'logarithmic', // 对数刻度

      opposite: false,
      className: 'highcharts-navigator-yaxis',
      gridLineColor: 'rgba(0,0,0,0.05)',
    },

  ],
  series: [
    {
      name: '已实现价格',
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
      yAxis: 0,
    },
    {
      id: 'sma',
      linkedTo: 'series0',
      name: '已实现价格',
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
