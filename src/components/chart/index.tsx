
import Highcharts from 'highcharts/highstock'; // HighChart图表
import { globalOptions } from './global_option';

let isSetOption = false;

/**
 * 返回全局的Highcharts
 * @returns Highcharts
 */
export const getHighCharts = function():typeof Highcharts {
  // 全局配置
  if (!isSetOption) {
    Highcharts.setOptions(globalOptions);
    isSetOption = true;
  }
  return Highcharts;
};
