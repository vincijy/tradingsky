import { isMobile } from '@utils/is';

/**
 * 导航栏高度
 */
export const NAV_BAR_HEIGHT = 50;

/**
  * 导航栏下方的GAP内边距
  */
export const GAP_BAR_PADDING = 12;

/**
  * 导航栏下方的GAP中的按钮的高度
  */
export const GAP_BAR_BTN_HEIGHT = 26;

/**
 * 图表距离窗口顶部的距离
 */
const CHART_OUTLINE_TOP = NAV_BAR_HEIGHT + GAP_BAR_PADDING + GAP_BAR_BTN_HEIGHT;

/**
 * 图表距离窗口底部的距离
 */
const CHART_OUTLINE_BOTTOM_OFFSET = 36;

/**
 * 图表的高度计算
 */
const CHART_HEIGHT_PC = window.innerHeight - CHART_OUTLINE_TOP - CHART_OUTLINE_BOTTOM_OFFSET + 100;
const CHART_HEIGHT_MOBILE = 450;
export const CHART_HEIGHT = isMobile() ? CHART_HEIGHT_MOBILE : CHART_HEIGHT_PC;


/**
 * 表头标题区域高度
 */
export const CHART_HEADER_HEIGHT = 34;

/**
 * 表头标题区域距离window顶部的距离, + CHART_OUTLINE_TOP 使得恰好在图表上边缘, 然后向下偏移自身高度的一半来达到居中的目的
 */
export const CHART_HEADER_TOP = CHART_OUTLINE_TOP + CHART_HEADER_HEIGHT / 2; // 图表距离window顶部的距离

/**
 * 工具栏, 确保在表头区域的正下方
 */
export const CHART_TOOLBOX_TOP = CHART_HEADER_TOP + CHART_HEADER_HEIGHT; // 工具栏距离窗口顶部距离

/**
 * 工具栏的高度
 */
export const TOOLBOX_HEIGHT = 45;

/**
 * 表内容距离顶部的间距(空出位置来放header toolbox 等)
 */
export const CHART_CONTENT_MARGIN_TOP = 104;

