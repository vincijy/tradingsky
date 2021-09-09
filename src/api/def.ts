import { TypeDataRow } from '@/components/chart/def';

export interface Params {
    /**
     * 货币
     */
    asset:string;
}

export interface IChartDataResponse {
    rows:TypeDataRow;
};
