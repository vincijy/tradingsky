import { commonOptions } from '@/indices/chart_common';
import { mergeWith } from 'lodash';
export function mergeOption(commonOption:any, privateOption:any) {
  // const newOp = mergeWith({}, commonOption, privateOption);
  // return { ...newOp };
  return { ...commonOptions, ...privateOption };
};


(window as any).mergeOption = mergeOption;
