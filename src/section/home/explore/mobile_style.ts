import styled from 'styled-components';
import { ossImgs } from '@oss';

export const ExploreWrapper = styled.div `
    height: 90hv; // 整体大小
    transform: translateY(-100px);
    .catalog-container {
        justify-content: center;
        display: flex;
        background: #F5F5F6;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    h2.head-text {
        font-size: 21px;
        margin-top: 30px;
        font-weight: bold;
    }   
    .catalog-text-area {
        text-align: left;
        visibility: visible;
        animation-duration: 0.6s;
        animation-name: fadeInUp;
        width: 90vw;
        margin-bottom: 50px;
        .small-text {
            font-size: 14px;
            color: gray;
            width: 100%;
        }
        li {
            font-size: 16px;
            color: #353030;
            margin-bottom: 15px;
            margin-top: 20px;
            // font-weight: bold;
            line-height: 30px;
            text-align: center;
        }
        .desc::before {
            content: " ";
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background: #fe4066;
            display: inline-block;
            vertical-align: middle;
            margin-right: 14px;
        }

    }
    .btn-area {
        text-align: center;
        .btn {
            padding: 0 50px;
            height: 50px;
            line-height: 48px;
            display: inline-block;
            background-color: #ffffff;
            border-radius: 4px;
            font-size: 16px;
            margin: 25px auto 25px;
            text-decoration: none;
            font-weight: bold;
            box-sizing: border-box;
            border: 2px solid black;
            transition: opacity 0.3s;
            color: black;
        }
    }
    .catalog-img-area {
        background: url(${ossImgs.main_1}) no-repeat center; // 图片填充
        background-size: 90% 90%;
        width: 90vw;
        height: 57vw;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        visibility: visible;
        animation-duration: 0.6s;
        animation-name: fadeInUp;
    }
    @-webkit-keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,100%,0);
            transform: translate3d(0,100%,0)
        }
    
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none
        }
    }
    
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,100%,0);
            transform: translate3d(0,100%,0)
        }
    
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none
        }
    }
`;

