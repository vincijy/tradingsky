import { mergeWith } from 'lodash';
export function mergeOption(commonOption:any, privateOption:any) {
  return mergeWith(commonOption, privateOption);
};
