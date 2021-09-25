import { LineColor } from '../../def';

/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
export const chartBtc = {
  chart: {
    type: 'area',
  },
  yAxis: [
    {
      TickInterval: 0.1, // 刻度间隔
      minTickInterval: 0.1, // 最小刻度间隔
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
        style: { color: '#3c414c' },
        formatter: function():string {
          let percent = Number((this as any).value * 100).toFixed(0);
          percent += '%';
          return percent;
        },
      },
      gridLineColor: 'rgba(240,240,240,.67)',
      min: 0,
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
      name: '1h',
      data: [],
      color: '#fffc96',
      yAxis: 0,
      id: '1h',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,
    },
    {
      name: '1h_24h',
      data: [],
      color: '#fceb00',
      yAxis: 0,
      id: '1h_24h',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,
    },
    {
      name: '1d_1w',
      data: [],
      color: '#ffc038',
      yAxis: 0,
      id: '1w_1m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '1w_1m',
      data: [],
      color: '#ffaa0d',
      yAxis: 0,
      id: '1w_1m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '1m_3m',
      data: [],
      color: '#ff8800',
      yAxis: 0,
      id: '1m_3m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '3m_6m',
      data: [],
      color: '#E63F00',
      yAxis: 0,
      id: '3m_6m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '6m_12m',
      data: [],
      color: '#ad2d82',
      yAxis: 0,
      id: '6m_12m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '1y_2y',
      data: [],
      color: '#990066',
      yAxis: 0,
      id: '1y_2y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '2y_3y',
      data: [],
      color: '#990066',
      yAxis: 0,
      id: '2y_3y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,
    },
    {
      name: '3y_5y',
      data: [],
      color: '#550088',
      yAxis: 0,
      id: '3y_5y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '5y_7y',
      data: [],
      color: '#3A0088',
      yAxis: 0,
      id: '5y_7y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '7y_10y',
      data: [],
      color: '#2c2633',
      yAxis: 0,
      id: '7y_10y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: 'more_10y',
      data: [],
      color: '#222124',
      yAxis: 0,
      id: 'more_10y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,

    },
    {
      name: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
      visible: true,
      showInLegend: true,
      type: 'line',
    },
    {
      type: 'sma',
      linkedTo: 'more_10y',
      name: 'sma',
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      params: {
        period: 0,
      },
      visible: false,
      showInLegend: false,
    },
  ],
};