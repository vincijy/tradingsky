import { getAnnotationManager } from '@/utils/annotation';
import store from '@/store/index';

export const options = {
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
  xAxis: {
    labels: {
      formatter: function():string {
        // JS时间戳
        const value = (this as any).value;

        // TODO: 使用统一的时间格式化工具函数, 避免一些容易搞错的问题
        const date = new Date(value);
        return `${date.getMonth() + 1}月 ${date.getDate()}日`;
      },
    },
    events: {
      setExtremes: function(event:any) {
        if (store.getState().chart.annotationVisible) {
          const ano = getAnnotationManager();
          if (!ano) {
            return;
          }
          ano.clearAnnotationCircle();
          ano.drawAnnotationCircle();
        }
      },
    },
  },
  series: [
    {
      name: '活跃地址量',
      data: [],
      // 橙色
      color: 'rgb(247, 147, 26)',
      yAxis: 0,
      id: 'activeAddress',
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
      linkedTo: 'activeAddress',
      name: '',
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
