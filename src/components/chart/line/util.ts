import { getTimeStamp, findFirstGreater } from '@/utils/date';
import { IDate } from '@/indices/def';
import { TypeDataRow } from '../def';
import * as D from './def';

type TypeKey = keyof D.IConvertValues;

/**
 * Convert data recept from backend to a format easily handled by the frontend
 * @param data
 * @returns data converted
 */
export const convert = (data:TypeDataRow):D.IConvertValues => {
  const res:D.IConvertValues = {
    v: [],
    BUSD: [],
    DAI: [],
    EURS: [],
    GUSD: [],
    HUSD: [],
    PAX: [],
    SAI: [],
    USDC: [],
    USDT: [],
    sUSD: [],

    // for cvvd
    'v_cvdd': [],
    'v_pru': [],

  };

  data.forEach((item) => {

    // 类型兼容字符串,后端处理数据的时候可能会把一些值当字符串传过来, eg '12344' => 12344
    for (const key of Object.keys(item) as TypeKey[]) {
      const value = item[key];
      if (typeof value === 'string') {
        item[key] = parseFloat(value);
      }
    }

    // JS的时间戳和unix的 相差* 1000
    const x = item.t * 1000;

    for (const key of Object.keys(item) as TypeKey[]) {
      const value = item[key];
      if (value !== undefined && res[key] !== undefined) {
        res[key].push([x, value]);
      }
    }
  });
  return res;
};


/**
 * given one date, cut data from that date;
 * @param data
 * @param date
 * @returns data cut
 */
export const cutDataByDate = (data:[number, number][], date:IDate) => {
  const t = getTimeStamp(date);
  if (data.length === 0) {
    return [];
  }
  const newData = data.map((item) => item[0]);
  const interval = newData[1] - newData[0];
  const index = findFirstGreater(newData, t, interval) - 1;
  return data.splice(index);
};
