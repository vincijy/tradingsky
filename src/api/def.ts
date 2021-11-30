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

export interface ICoin {
    articleJson:string;
    briefIntroduction:null;
    briefName:string;
    chainIndiceJson:string;
    coinPublishDate:Date;
    contrastJson:string;
    createDate:Date;
    createTimeStamp:null;
    detail:null;
    discordUrl:string;
    fullName:string;
    githubUrl:string;
    id:number;
    imgSrc:string;
    key:string;
    makeplaceRank:string;
    markplacePercent:string;
    officalUrl:string;
    other:string;
    // price:string;
    statusCode:string;
    tag:string;
    telegramUrl:string;
    twitterUrl:string;
    whiteBookUrl:string;

    circulating_percent:string;
    circulating_supply:string;
    cmc_rank:string;
    market_cap:string;
    market_cap_dominance:string;
    max_supply:string;
    percent_change_24h:string;
    price:string;
  }

export interface IExtremum {
    index:string;
    v:number;
}