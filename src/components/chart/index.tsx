
import Highcharts from 'highcharts/highstock'; // HighChart图表
import initExport from 'highcharts/modules/exporting';
import HSIndicators from 'highcharts/indicators/indicators';
import { globalOptions } from '@indices/chart_common/gloabl';
import offlineExporting from 'highcharts/modules/offline-exporting';
import colorAxis from 'highcharts/modules/coloraxis';
import { isProdEnv } from '@utils/is';
const isBrowser = typeof window !== 'undefined';
let isSetOption = false;

/**
 * 返回全局的Highcharts
 * @returns Highcharts
 */
export const getHighCharts = function():typeof Highcharts {
  // 全局配置
  if (!isSetOption && typeof Highcharts !== 'undefined' && typeof Highcharts.setOptions === 'function') {
    typeof Highcharts.setOptions === 'function' && Highcharts.setOptions(globalOptions);
    initExport(Highcharts);
    offlineExporting(Highcharts);
    colorAxis(Highcharts);
    HSIndicators(Highcharts);
    isSetOption = true;
  }
  return Highcharts;
};


let chart:Highcharts.Chart | null = null;

export function getChart() {
  return chart;
}

export function setChart(c:Highcharts.Chart) {
  chart = c;
}

if (!isProdEnv) {
  if (isBrowser) {
    (window as any).getChart = getChart;
  }
}
