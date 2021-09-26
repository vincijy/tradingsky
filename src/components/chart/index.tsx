
import Highcharts from 'highcharts/highstock'; // HighChart图表
import initExport from 'highcharts/modules/exporting';
import HSIndicators from 'highcharts/indicators/indicators';
import { globalOptions } from '@/indices/chart_common/gloabl';
import offlineExporting from 'highcharts/modules/offline-exporting';
import colorAxis from 'highcharts/modules/coloraxis';
let isSetOption = false;

/**
 * 返回全局的Highcharts
 * @returns Highcharts
 */
export const getHighCharts = function():typeof Highcharts {
  // 全局配置
  if (!isSetOption) {
    Highcharts.setOptions(globalOptions);
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
(window as any).getChart = getChart;
