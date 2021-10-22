
// '1d_1w',
// '1h',
// '1h_24h',
// '1m_3m',
// '1w_1m',
// '1y_2y',
// '2y_3y',
// '3m_6m',
// '3y_5y',
// '5y_7y',
// '6m_12m',
// '7y_10y',
/**
 * 个性化图表配置, 用于覆盖默认的配置项
 */
import { positioner } from '@/indices/chart_common/tooltip_positioner';
export const chartBtc = {
  tooltip: {
    formatter: function():string {
      const that = this as any;
      return that.points.reduce(function(s:any, point:any) {
        const normal = `${s}<br/>
        <div style='color: ${point.color};font-size:16px;'>•</div>
        ${ point.series.name }: ${ (point.y * 100).toFixed(2) }%`;

        const price = `${s}<br/>
        <div style='color: ${point.color};font-size:16px;'>•</div>
        ${ point.series.name }: ${ point.y }`;

        return point.series.name === '价格' ? price : normal;

      }, `<b>${ new Date(that.x).toLocaleDateString('zh-CN')}</b>`);
    },
    positioner: positioner,
  },
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


  plotOptions: {
    area: {
      stacking: 'area',
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
      name: 'more_10y',
      data: [],
      color: '#45346C',
      yAxis: 0,
      id: 'more_10y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '7y_10y',
      data: [],
      color: '#475691',
      yAxis: 0,
      id: '7y_10y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '5y_7y',
      data: [],
      color: '#2D8496',
      yAxis: 0,
      id: '5y_7y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.7,
    },
    {
      name: '3y_5y',
      data: [],
      color: '#13B19A',
      yAxis: 0,
      id: '3y_5y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '2y_3y',
      data: [],
      color: '#63D095',
      yAxis: 0,
      id: '2y_3y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '1y_2y',
      data: [],
      color: '#C0EB9A',
      yAxis: 0,
      id: '1y_2y',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '6m_12m',
      data: [],
      color: '#FFF7AA',
      yAxis: 0,
      id: '6m_12m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '3m_6m',
      data: [],
      color: '#FFD19E',
      yAxis: 0,
      id: '3m_6m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '1m_3m',
      data: [],
      color: '#FE8285',
      yAxis: 0,
      id: '1m_3m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '1w_1m',
      data: [],
      color: '#CF5372',
      yAxis: 0,
      id: '1w_1m',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '1d_1w',
      data: [],
      color: '#CF5372',
      yAxis: 0,
      id: '1d_1w',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '24h',
      data: [],
      color: '#93336F',
      yAxis: 0,
      id: '24h',
      visible: true,
      showInLegend: true,
      fillOpacity: 0.9,
    },
    {
      name: '价格',
      id: '价格',
      data: [],
      color: 'rgba(0,0,0,0.5)',
      yAxis: 1,
      visible: true,
      showInLegend: true,
      type: 'line',
    },
    {
      id: 'sma',
      linkedTo: '24h',
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
