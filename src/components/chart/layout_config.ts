

const TOP_OFFSET = 105; // 参考glassnode图表距离window顶部的距离
const BOTTOM_OFFSET = 36; // 图表距离window底部的距离
export const CHART_HEIGHT = window.innerHeight - TOP_OFFSET - BOTTOM_OFFSET;

/**
 * 表头标题区域高度
 */
export const CHART_HEADER_HEIGHT = 30;

/**
 * 表头标题区域距离window顶部的距离, + TOP_OFFSET 使得恰好在图表上边缘, 然后向下偏移自身高度的一半来达到居中的目的
 */
export const CHART_HEADER_TOP = TOP_OFFSET + CHART_HEADER_HEIGHT / 2; // 图表距离window顶部的距离

/**
 * 工具栏, 确保在表头区域的正下方
 */
export const CHART_TOOLBOX_TOP = CHART_HEADER_TOP + CHART_HEADER_HEIGHT; // 工具栏距离窗口顶部距离

/**
 * 表内容距离顶部的间距(空出位置来放header toolbox 等)
 */
export const CHART_CONTENT_MARGIN_TOP = 104;
