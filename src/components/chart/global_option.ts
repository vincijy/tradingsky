/**
 * Highchart 全局配置
 */
export const globalOptions = { // 全局配置
  lang: {
    contextButtonTitle: '图表导出菜单',
    decimalPoint: '.', // 小数点
    downloadJPEG: '下载JPEG图片',
    downloadPDF: '下载PDF文件',
    downloadPNG: '下载PNG文件',
    downloadSVG: '下载SVG文件',
    drillUpText: '返回 {series.name}',
    loading: '加载中',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    noData: '没有数据',
    numericSymbols: [ 'K', 'M', 'G', 'T', 'P', 'E'],
    printChart: '打印图表',
    resetZoom: '恢复缩放',
    resetZoomTitle: '恢复图表',
    shortMonths: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    thousandsSep: ',', // 千分号
    weekdays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
    rangeSelectorZoom: '时间范围', // 不显示 'zoom' 文字
  },
  tooltip: {
    // xDateFormat: '%Y-%m-%d',  // 时间格式化
    shared: true,
  },
};

