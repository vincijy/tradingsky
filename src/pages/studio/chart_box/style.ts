import styled from 'styled-components';
import { ossImgs } from '@/oss';
export const BoxWrapper = styled.div `
    border: 1px solid rgba(0, 0, 0, 0.1); // 边框效果

    .content{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1); // 边框效果
        border-top: 1px solid rgba(0, 0, 0, 0.1); // 边框效果
    }

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
        background: url(${ossImgs.restriction}) no-repeat center;
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
    background-size: 50%;
`;


