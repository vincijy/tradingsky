
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
  r:{
    t:string;
    o:{
      v:string;
    };
  };
  // t:number;
  // v:number;
  // index:number;

  // busd?:number;
  // dai?:number;
  // eurs?:number;
  // gusd?:number;
  // husd?:number;
  // pax?:number;
  // sai?:number;
  // susd?:number;
  // usdc?:number;
  // usdt?:number;

  // // for cvvd
  // v_cvdd:number;
  // v_pru:number;

  // o:any;
};

export type TypeDataRow = IDataUnit[]

