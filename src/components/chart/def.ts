
export enum constructorType {
    // 用于Highcharts 图表
    chart = 'chart',

    // 用于 Highstock 图表
    stockChart = 'stockChart',

    // 用于 Highmaps 图表
    mapChart = 'mapChart',

    // 用于甘特图
    ganttChart = 'ganttChart'
}

export interface IDataUnit {
  t:number;
  v:number;
  index:number;

  BUSD?:number;
  DAI?:number;
  EURS?:number;
  GUSD?:number;
  HUSD?:number;
  PAX?:number;
  SAI?:number;
  USDC?:number;
  USDT?:number;
  sUSD?:number;
  o?:{
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
  };
};

export type TypeDataRow = IDataUnit[]

