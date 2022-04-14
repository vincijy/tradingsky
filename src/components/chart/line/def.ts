

import { LineColor, BandColor } from '@/indices/def';


export interface IConvertValues {
  v:[number, number][];
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
  id:string;
}

export interface IXAxis {
  plotBands:{
    color:BandColor;
    from:number;
    to:number;
    id:string;
  }[];
};

export interface IRow{
  r:{
    o:{
      v:string;
    };
    t:string;
  };
};