
import Highcharts from 'highcharts/highstock'; // HighChart图表
import initExport from 'highcharts/modules/exporting';
import HSIndicators from 'highcharts/indicators/indicators';
import { globalOptions } from './option_gloabl';

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
    HSIndicators(Highcharts);
    isSetOption = true;
  }
  return Highcharts;
};


(window as any).hc = getHighCharts();