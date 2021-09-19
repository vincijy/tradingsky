import styled from 'styled-components';
import restriction from '@/assets/img/restriction.jpg';
import waterMask from '@/assets/img/water_mask.jpg';
import qrcode from '@/assets/img/qrcode.jpg';
import * as Layout from '../../../config/layout';

export const CoverWrapper = styled.div `
    // 布局
    position: absolute;
    // 45 是toolbox高度, TODO, 想办法算出来
    top: ${Layout.CHART_TOOLBOX_TOP + 45 }px;
    height: ${Layout.CHART_HEIGHT - Layout.CHART_HEADER_HEIGHT - 45 }px;
    z-index: 1;
    background: white;
    border: 1px solid red;
    // border-top: 1px solid rgb(226, 226, 226);
    // border-bottom: 1px solid rgb(226, 226, 226);
    .content{
        text-align: left;
        font-size: large;
        border: 1px solid green;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    li {
        // border-top: 1px solid rgb(226, 226, 226);
        // border-bottom: 1px solid rgb(226, 226, 226);
    }
    ul {
        display: flex;
        // border-left: 1px solid rgb(226, 226, 226);
    }

    .toolbox-btn-icon {
        color: rgb(128, 128, 128);
        font-size: 0.625rem; // 这个无效, 会被antd-card中的css强行覆盖
        margin-left: 0.5rem;
        display: inline;
    }

    .highchart-cover {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(${restriction}) no-repeat center;
      background-size: cover;
   }
`;

export const ToolBoxCellWrapper = styled.div `
    .toolbox-cell {
        border-right: 1px solid rgb(226, 226, 226);
        padding: 0.15rem 1rem;
        cursor: pointer;

        // 文本不可选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .toolbox-cell-text-up {
        font-size: 0.65rem;
        color: rgb(128, 128, 128);
        white-space: nowrap;
    }
    .toolbox-cell-text-down {
        font-size: 0.8rem;
    }

    .toolbox-btn-icon {
        color: rgb(128, 128, 128);
        font-size: 0.625rem; // 这个无效, 会被antd-card中的css强行覆盖
        margin-left: 0.5rem;
        display: inline;
    }
`;

export const ChartLoadingWrapper = styled.div `
    border: 1px solid red;
    display: flex;
    justify-content: center;
`;


export const ButtonArea = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid red;

    display: flex;
    aligin-items: center;
    justify-content: center;
    flex-direction: column;

    .button-tip {
        color: black;
        font-size: 1.6rem;
        letter-spacing: 2px;
        font-size: bold;
        text-align: center;
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
        font-size: 1rem;
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
