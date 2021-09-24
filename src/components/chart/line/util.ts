/* eslint-disable prefer-const */
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
    v_cvdd: [],
    v_pru: [],

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


const getSmaValues = (
  serieData:[number, number][],
  params:{
    index:number;
    period:number;
  },
) => {

  const X = serieData.map((item) => item[0]);
  const Y = serieData.map((item) => item[1]);
  let period:number = params.period as any,
    xVal:Array<number> = X,
    yVal:Array<(number|Array<(number|null)>|null)> = Y,
    yValLen = yVal.length,
    range = 0,
    sum = 0,
    // SMA:Array<Array<number>> = [],
    // xData:Array<number> = [],
    // yData:Array<number> = [],
    index = -1,
    i:(number|undefined),
    SMAPoint:(Array<number>|undefined);

  const data:[number, number][] = [];
  if (xVal.length < period) {
    return;
  }

  // Switch index for OHLC / Candlestick / Arearange
  if (Array.isArray(yVal[0])) {
    index = params.index ? params.index : 0;
  }

  // Accumulate first N-points
  while (range < period - 1) {
    sum += index < 0 ? yVal[range] : (yVal as any)[range][index];
    range++;
  }

  // Calculate value one-by-one for each period in visible data
  for (i = range; i < yValLen; i++) {
    sum += index < 0 ? yVal[i] : (yVal as any)[i][index];

    SMAPoint = [xVal[i], sum / period];
    // SMA.push(SMAPoint);
    // xData.push(SMAPoint[0]);
    // yData.push(SMAPoint[1]);
    data.push([SMAPoint[0], SMAPoint[1]]);

    sum -= (
      index < 0 ?
        yVal[i - range] :
        (yVal as any)[i - range][index]
    );
  }

  return {
    // values: SMA,
    // xData: xData,
    // yData: yData,
    data: data,
  };
};

export const assignSmaDataToSerie = (serie:D.ISerie, sma:D.ISerie) => {

  // 检查0日均线情况下, 均线不显示, 恢复显示原数据
  if (sma && sma.params) {
    if (sma.params.period === 0) {
      return;
    }

    const smaValues = getSmaValues(serie.data, sma.params);
    if (!smaValues) {
      return;
    }
    const { data } = smaValues;
    serie.data = data;
  }
};