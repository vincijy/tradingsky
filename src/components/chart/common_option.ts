
const TOP_OFFSET = 142; // 图表距离window顶部的距离
const BOTTOM_OFFSET = 30; // 图表距离window底部的距离
const chartHeight = window.innerHeight - TOP_OFFSET - BOTTOM_OFFSET;

/**
 * 多种图表的通用配置
 */
export const commonOptions = {

  navigator: {
    height: 26, // 导航栏高度(图表下方时间范围选择器)
  },

  chart: {
    height: chartHeight, // 图表高度, 图表的高度 = 纯图表高 + naviagator高度 +  日历高度
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
  },

  credits: {
    enabled: false, // 不显示版权
  },
  plotOptions: {
    series: {
      lineWidth: 1,
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
    },
    column: {
      borderWidth: 0,
      groupPadding: 0,
      pointPadding: .2,
      shadow: !1,
    },
  },

  rangeSelector: {
    allButtonsEnabled: true,
    buttons: [{
      type: 'week', // 新增一周刻度
      count: 1,
      text: '1周',
    },
    {
      type: 'month',
      count: 1,
      text: '1月',
    }, {
      type: 'month',
      count: 3,
      text: '3月',
    }, {
      type: 'month',
      count: 6,
      text: '6月',
    }, {
      type: 'ytd',
      text: '本年',
    }, {
      type: 'year',
      count: 1,
      text: '1年',
    }, {
      type: 'all',
      text: '全部',
    }],
    buttonTheme: {
      width: 42,
    },
    selected: 4,
  },

  legend: {
    enabled: true, // 显示图例
    verticalAlign: 'top', // 图例位置
    margin: 4,
    align: 'right',
  },

  tooltip: {
    animation: false, // 关闭动画效果（what）

    backgroundColor: '#fcfcfc', // 背景颜色
    borderColor: 'rgb(247, 147, 26)', // 边框颜色
    borderRadius: 3, // 边框圆角
    borderWidth: 1, // 边框宽度

    xDateFormat: '%Y-%m-%d', // 时间格式化

    split: false, // 两个数据的提示框合并
    shared: true,

    shadow: true, // 是否显示阴影
    style: { // 文字内容相关样式
      color: 'black',
      fontSize: '12px',
    },

    // crosshairs: [true, true],  // 同时启用竖直及水平准星线

    crosshairs: [{ // 设置准星线样式
      width: 1,
      color: 'rgb(204, 204, 204)',
    }, {
      width: 0,
      color: 'rgb(204, 204, 204)',
    }],
  },
};
