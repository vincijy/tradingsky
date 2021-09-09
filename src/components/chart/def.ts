
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
};

export type TypeDataRow = IDataUnit[]

