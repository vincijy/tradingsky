
import * as Layout from './layout_config';
import { rangeSelector } from './option_range_selector';
import { tooltip } from './option_tooltip';
/**
 * 多种图表的通用配置
 */
export const commonOptions = {
  navigator: {
    height: 26, // 导航栏高度(图表下方时间范围选择器)
  },

  chart: {
    height: Layout.CHART_HEIGHT, // 图表高度, 图表的高度 = 纯图表高 + naviagator高度 +  日历高度
    zoomType: 'x',
    pinchType: 'x',
    panning: true,
    panKey: 'shift',
    marginTop: Layout.CHART_CONTENT_MARGIN_TOP,
  },

  exporting: {
    enabled: false, // Whether to enable the exporting module. Disabling the module will hide the context button, but API methods will still be available.
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
  rangeSelector: rangeSelector,
  legend: {
    floating: true, // When the legend is floating, the plot area ignores it and is allowed to be placed below it.
    enabled: true, // 显示图例
    verticalAlign: 'top', // 图例位置
    margin: 0,
    align: 'right',
    y: Layout.CHART_CONTENT_MARGIN_TOP + 24,
  },
  tooltip: tooltip,
};
