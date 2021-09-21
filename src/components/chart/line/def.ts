

import { TypeDataRow } from '../def';

export interface IProps {
  /**
   * 左侧y轴数据
   */
  seriesA:{
    name:string;
    data:TypeDataRow;
  };

  /**
   * 右侧y轴数据
   */
  seriesB:{
    name:string;
    data:TypeDataRow;
  };
}

export interface IConvertValues {
  v:[number, number][];
  BUSD:[number, number][];
  DAI:[number, number][];
  EURS:[number, number][];
  GUSD:[number, number][];
  HUSD:[number, number][];
  PAX:[number, number][];
  SAI:[number, number][];
  USDC:[number, number][];
  USDT:[number, number][];
  sUSD:[number, number][];
}

export interface ISerie {
  data:[number, number][];
  visible:boolean;
  showInLegend:boolean;
  name:string;
  type:string;
  params?:{
    period:number;
  };
}

export const CURRENCIES = [
  'BUSD',
  'DAI',
  'EURS',
  'GUSD',
  'HUSD',
  'PAX',
  'SAI',
  'USDC',
  'USDT',
  'sUSD',
];