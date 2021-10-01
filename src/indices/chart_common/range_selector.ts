import { isMobile } from '@/utils/is';
import * as Layout from '../../config/layout';

export const rangeSelector = {
  floating: true, // 非常重要的一个参数 When the rangeselector is floating, the plot area does not reserve space for it. This opens for positioning anywhere on the chart.Defaults to false.
  allButtonsEnabled: true,
  x: 0,
  y: - Layout.CHART_CONTENT_MARGIN_TOP + 8, // 将日期选择组件上移(0的位置是chart content的上边缘)
  buttonPosition: {
    align: isMobile() ? 'right' : 'center',
    x: 0,
    y: 0,
  },
  inputEnabled: isMobile() ? false : true,
  buttonTheme: { // styles for the buttons
    width: 42,
  },
  selected: 6,
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
};
