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
    imgSrc:null;
    key:string;
    makeplaceRank:string;
    markplacePercent:string;
    officalUrl:string;
    other:string;
    price:string;
    statusCode:string;
    tag:string;
    telegramUrl:string;
    twitterUrl:string;
    whiteBookUrl:string;
  }
