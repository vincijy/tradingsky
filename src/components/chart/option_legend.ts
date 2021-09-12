import * as Layout from './layout_config';

export const legend = {
  floating: true, // When the legend is floating, the plot area ignores it and is allowed to be placed below it.
  enabled: true, // 显示图例
  verticalAlign: 'top', // 图例位置
  margin: 0,
  align: 'right',
  y: Layout.CHART_CONTENT_MARGIN_TOP + 24,
};
