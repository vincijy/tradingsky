

import { LineColor, BandColor } from '@/indices/def';
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