import styled from 'styled-components';
import waterMask from '@/assets/img/water_mask.jpg';
import restriction from '@/assets/img/restriction.jpg';

export const BoxWrapper = styled.div `
    margin-top: 14px;
    
    .bord-box{  // Card容器
        border-radius: 2px;
        height: 824px;

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

    .water-mask {
        width: 100%;
        position: absolute;
        height: 20%;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
        background: url(${waterMask}) no-repeat center;
    }

    .restriction {
        background: url(${restriction}) no-repeat center;
        height: 100%;
        width; 100%;
        opacity: 1;
        background-size: cover;
    }
    .clone-btns {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        button {
          margin: 10px;
        }
    }
`;
