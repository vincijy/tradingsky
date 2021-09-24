

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

  busd:[number, number][];
  dai:[number, number][];
  eurs:[number, number][];
  gusd:[number, number][];
  husd:[number, number][];
  pax:[number, number][];
  sai:[number, number][];
  susd:[number, number][];
  usdc:[number, number][];
  usdt:[number, number][];

  // for cvvd
  v_cvdd:[number, number][];
  v_pru:[number, number][];
}

export interface IDataAgeHold {
    '1d_1w':number;
    '1m_3m':number;
    '1w_1m':number;
    '1y_2y':number;
    '2y_3y':number;
    '3m_6m':number;
    '3y_5y':number;
    '5y_7y':number;
    '6m_12m':number;
    '7y_10y':number;
    '24h':number;
    'more_10y':number;
}

export interface ISerie {
  data:[number, number][];
  visible:boolean;
  showInLegend:boolean;
  name:string;
  type:string;
  params?:{
    period:number;
    index:number;
  };
}

export const CURRENCIES = [
  'busd',
  'dai',
  'eurs',
  'gusd',
  'husd',
  'pax',
  'sai',
  'susd',
  'usdc',
  'usdt',
];
