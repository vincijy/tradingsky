import { commonOptions } from '@/indices/chart_common';
import { mergeWith } from 'lodash';

function replaceByPrivate(newOption:any, privateOption:any) {
  // 背景图片替换, TODO, 写一个更加通用的
  if (privateOption.chart && privateOption.chart.plotBackgroundImage) {
    newOption.chart.plotBackgroundImage = privateOption.chart.plotBackgroundImage;
  }
}

export function mergeOption(commonOption:any, privateOption:any) {
  const newOption = { ...commonOptions, ...privateOption };
  replaceByPrivate(newOption, privateOption);
  return newOption;
};

(window as any).mergeOption = mergeOption;
