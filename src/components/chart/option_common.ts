
import { clearAnnotationCircle, drawAnnotationCircle } from '@/utils/annotation';
import store from '@/store/index';
import * as Layout from '../../config/layout';
import { rangeSelector } from './option_range_selector';
import { tooltip } from './option_tooltip';
import { legend } from './option_legend';
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
    events: {
      selection: function(event:any) {
        // 在批注可见情况下清空, 重绘
        setTimeout(() => {
          if (store.getState().chart.annotationVisible) {
            clearAnnotationCircle();
            drawAnnotationCircle();
          }
        });

        // TODO: on change
      },
    },
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
      // 悬浮上去的时候光晕圈圈大小与形状
      marker: {
        symbol: 'circle',
        radius: 2,
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
  legend: legend,
  tooltip: tooltip,
};
