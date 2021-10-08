import { commonOptions } from '@/indices/chart_common';

function replaceByPrivate(newOption:any, privateOption:any) {
  // 背景图片替换, TODO, 写一个更加通用的
  if (privateOption.chart && privateOption.chart.plotBackgroundImage) {
    newOption.chart.plotBackgroundImage = privateOption.chart.plotBackgroundImage;
  }
  if (privateOption.chart && privateOption.chart.tooltip) {
    newOption.tooltip.formatter = privateOption.chart.tooltip.formatter;
    newOption.tooltip.positioner = privateOption.chart.tooltip.positioner;
  }
  if (privateOption.chart && privateOption.chart.plotBackgroundImage) {
    newOption.chart.plotBackgroundImage = privateOption.chart.plotBackgroundImage;
  }
}

export function mergeOption(commonOption:any, privateOption:any) {
  // TODO: 重构配置合并垃圾代码
  const newOption = { ...commonOptions, ...privateOption };
  replaceByPrivate(newOption, privateOption);
  return newOption;
};
