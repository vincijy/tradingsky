import styled from 'styled-components';
import waterMask from '@/assets/img/water_mask.jpg';
import restriction from '@/assets/img/restriction.jpg';
import qrcode from '@/assets/img/qrcode.jpg';
import * as Layout from '../../../components/chart/layout_config';

export const ChartTitleArea = styled.div `
    position: absolute;
    // border: 1px solid rgb(226, 226, 226);
    top: ${Layout.CHART_HEADER_TOP}px;
    height: ${Layout.CHART_HEADER_HEIGHT}px;
    z-index: 1;
    text-align: left;
    img {
        widht: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 4px;
    }

    .chart-title {
        font-size: 0.8rem;
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        line-height: 30px;
        margin-left: 4px;
    }
`;

export const BoxWrapper = styled.div `
    .ant-card-body {
        padding: 1px 4px;
        // TODO: css layout design
        // border: 1px solid red;
    }
    .ant-card-head-title {
        padding: 7px  0;
    }
    .ant-card-head {
        min-height: 30px;
    }
    
    .bord-box{  // Card容器
        border-radius: 2px;
        .ant-card-head-title{  // 标题
            text-align: left;
            margin-left: -10px;

            img{
                width: 16px;
                margin-bottom: 2.5px;
            }

            span{
                font-size: 15.4px !important;
                margin-left: 5px;
            }
        }
    }

    .highcharts-tooltip-box{  // 提示框的透明效果
        opacity: 0.8;
    }

    .highcharts-legend-item{
        font-size: 100px !important;
    }

    .clone-btns {
        z-index: 1;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        button {
          margin: 10px;
        }
    }

    #highchart-cover {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(${restriction}) no-repeat center;
        background-size: cover;
    }

    .card-title-area {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ChartLoadingWrapper = styled.div `
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const WaterMask = styled.div ` // 水印
    width: 100%;
    position: absolute;
    height: 30%;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    background: url(${waterMask}) no-repeat center;
    background-size: 50%;
`;



export const ButtonArea = styled.div `
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    aligin-items: center;
    flex-direction: column;

    .button-tip {
        color: black;
        font-size: 30px;
        letter-spacing: 2px;
        font-size: bold;
    }
    .buttons-wrap {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        padding-right: 30px;
        padding-left: 30px;
        Button {
            font-size: 12px;
            padding: 0 29px;
            height: 29px;
            font-weight: 500;
            border: 1px solid #dcdcdc;
            border-radius: 5px;
            color: white;
        }
        Button:nth-child(1){
            color: white;
        }
    
        Button:nth-child(2){
            background-color: #2894FF; // 天蓝色
        }
    }

`;


export const VipTip = styled.div `
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    .vip-tip-text {
        color: black;
        font-size: 30px;
        letter-spacing: 2px;
        font-size: bold;
    }
    .qrcode-wrap {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .qrcode {
            width: 150px;
            height:150px;
            background: url(${qrcode}) no-repeat center;
            background-size: cover;
        }
    }
`;
