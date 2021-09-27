import { TypeDataRow } from '@/components/chart/def';

export interface Params {
    /**
     * 货币
     */
    asset:string;
}

export interface IResponseChartData {
    rows:TypeDataRow;
};

export interface IAuthingWord {
    dataType:string;
    key:string;
    label:string;
    value:string;
};
