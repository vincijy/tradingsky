
import { getAnnotationManager } from '@utils/annotation';
import store from '@store/index';
import * as Layout from '../../config/layout';
import { rangeSelector } from './range_selector';
import { tooltip } from './tooltip';
import { legend } from './legend';
import { xAxis } from './x_axis';
import { plotBackgroundImage } from './bg';
/**
 * 多种图表的通用配置
 */
export const commonOptions = {
  navigator: {
    height: 35, // 导航栏高度(图表下方时间范围选择器)
    maskFill: 'rgba(60, 65, 76, 0.1)',
  },
  scrollbar: {
		  enabled: false,
  },
  chart: {
    animation: false,
    plotBackgroundImage,
    height: Layout.CHART_HEIGHT, // 图表高度, 图表的高度 = 纯图表高 + naviagator高度 +  日历高度
    zoomType: 'x',
    pinchType: 'x',
    selectionMarkerFill: 'rgba(0,0,0, 0.2)',
    panning: true,
    panKey: 'shift',
    marginTop: Layout.CHART_CONTENT_MARGIN_TOP,
    events: {
      selection: function(event:any) {
        if (store.getState().chart.annotationVisible) {
          const ano = getAnnotationManager();
          ano && ano.rePaint();
        }
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
  xAxis: xAxis,
};
