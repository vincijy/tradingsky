
import { AreaChartOutlined } from '@ant-design/icons';
import { tooltip } from './tooltip';


export const options = {
  title: {
    text: '',
  },
  navigator: {
    height: 40, // 导航栏高度(图表下方时间范围选择器)
    maskFill: 'rgba(60, 65, 76, 0.1)',
  },
  scrollbar: {
    enabled: false,
  },
  credits: {
    href: 'https://www.lianshucha.com/chart',
    style: {
      fontSize: '10px',
      color: '#909090',
    },
    text: 'www.lianshucha.com',

  },
  series: [{
    name: '价格',
    data: [],
    type: 'area',
    fillOpacity: 1,
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, 'rgb(142, 217, 255, 1)'],
        [1, 'rgba(255, 255, 255, 0)'],
      ],
    },
    threshold: null,

  }],
  chart: {
    height: 600,
    animation: false,
    zoomType: 'x',
    pinchType: 'x',
    selectionMarkerFill: 'rgba(0,0,0, 0.2)',
    panning: true,
    panKey: 'shift',
  },
  plotOptions: {
    series: {
      lineWidth: 1.5,
      animation: !1,
      connectNulls: !0,
      groupPadding: 0,
      showInNavigator: !0,
      turboThreshold: 0,
      dataGrouping: {
        enabled: !1,
      },
      states: {
        hover: {
          lineWidthPlus: 0,
        },
      },
      // 悬浮上去的时候光晕圈圈大小与形状
      marker: {
        symbol: 'circle',
        radius: 2,
      },
    },
  },
  yAxis: [
    {
      zoomEnabled: true, // 允许缩放
      tickPixelInterval: 40,
      align: 'left',
      opposite: false,
      gridLineColor: 'rgba(0,0,0,0.05)',
    },
  ],
  xAxis: {
    type: 'datetime',
    crosshair: true,
    dateTimeLabelFormats: {
      millisecond: '%H:%M:%S.%L',
      second: '%H:%M:%S',
      minute: '%H:%M',
      hour: '%H:%M',
      day: '%m-%d',
      week: '%m-%d',
      month: '%Y-%m',
      year: '%Y',
    },
  },
  tooltip: tooltip,
};
