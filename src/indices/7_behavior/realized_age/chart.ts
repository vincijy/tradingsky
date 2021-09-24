
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
  series: [
    {
      name: '1d_1w',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '1d_1w',
      visible: true,
      showInLegend: true,
    },
    {
      name: '1m_3m',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '1m_3m',
      visible: true,
      showInLegend: true,
    },
    {
      name: '1w_1m',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '1w_1m',
      visible: true,
      showInLegend: true,
    },
    {
      name: '1y_2y',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '1y_2y',
      visible: true,
      showInLegend: true,
    },
    {
      name: '2y_3y',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '2y_3y',
      visible: true,
      showInLegend: true,
    },
    {
      name: '3m_6m',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '3m_6m',
      visible: true,
      showInLegend: true,
    },
    {
      name: '3y_5y',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '3y_5y',
      visible: true,
      showInLegend: true,
    },
    {
      name: '5y_7y',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '5y_7y',
      visible: true,
      showInLegend: true,
    },
    {
      name: '6m_12m',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '6m_12m',
      visible: true,
      showInLegend: true,
    },
    {
      name: '7y_10y',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '7y_10y',
      visible: true,
      showInLegend: true,
    },
    {
      name: '24h',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: '24h',
      visible: true,
      showInLegend: true,
    },
    {
      name: 'more_10y',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'more_10y',
      visible: true,
      showInLegend: true,
    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
    },
    {
      type: 'sma',
      linkedTo: '1d_1w',
      params: {
        period: 7,
      },
      visible: false,
      showInLegend: false,
    },
  ],
};