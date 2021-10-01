import styled from 'styled-components';
import { ossImgs } from '@/oss';

export const CatalogWrapper = styled.div `
    height: 80hv; // 整体大小
    transform: translateY(-100px);
    .catalog-container {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    h2.head-text {
        font-size: 24;
        font-size: 21px;
        margin-bottom: 30px;
        font-weight: bold;
    }   
    .catalog-text-area {
        text-align: left;
        visibility: visible;
        animation-duration: 0.6s;
        animation-name: fadeInUp;
        width: 90vw;
        .small-text {
            margin-top: 15px;
            font-size: 14px;
            color: gray;
            margin-bottom: 15px;
            text-align: center;
            width: 100%;
        }
        li {
            font-size: 14px;
            color: #353030;
            line-height: 30px;
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
    .catalog-img-area {
        background: url(${ossImgs.catalog_chart}) no-repeat center; // 图片填充
        background-size: 90% 90%;
        width: 90vw;
        height: 57vw;
        padding: 20px;
        background-color: #ecedef;
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

