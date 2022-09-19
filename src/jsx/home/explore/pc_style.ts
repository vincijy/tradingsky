import styled from 'styled-components';
import { ossImgs } from '@/oss';

export const ExploreWrapper = styled.div `
    height: 100hv; // 整体大小
    .catalog-container {
        justify-content: center;
        // flex-direction: column;
        align-items: center;
        display: flex;
        width: 100%;
        background: #F5F5F6;
        height: 550px;
    }
    .catalog-text-area {
        text-align: left;
        width: 38%;
        height: 400px;
        margin-top: 40px;
        padding-left: 40px;
        visibility: visible;
        animation-duration: 0.6s;
        animation-name: fadeInUp;
        .head-text {
            font-size: 33px;
            font-weight: bold;
        }
        .small-text {
            margin-top: 15px;
            font-size: 14px;
            color: gray;
            margin-bottom: 25px;
        }
        p {
            font-size: 23px;
            margin-top: 20px;
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
        .explore-button{
            padding: 0 70px;
            height: 50px;
            line-height: 48px;
            background-color: #ffffff;
            border-radius: 4px;
            font-size: 16px;
            margin: 50px auto 0;
            font-weight: bold;
            box-sizing: border-box;
            border: 2px solid black;
            color: black;

        }

    }
    .catalog-img-area {
        background: url(${ossImgs.main_1}) no-repeat center; // 图片填充
        background-size: 93% 90%;
        width: 43%;
        height: 400px;
        padding: 5px;
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
    @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：背景图片隐藏
        /* background: none */
        height: 280px;
        margin-top: -50px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：背景图片缩小
        height: 600px;
    }

    .content{
        margin-right: 60%; // 左侧水平居中
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：水平对齐
            margin-left: 0%;
        }

        .container{
            margin-top: 30%; // 文字垂直居中

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：垂直对齐
                margin-top: 40%;
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：垂直对齐
                margin-top: 35%;
            }

            h2{
                margin-top: 14px; // 文字的行间距
                margin-left: 34px; // 文字左边间距

                font-size: 30px; // 文字大小、对齐方式
                text-align: left;

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：大字隐藏
                    display: none;
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：大字缩小
                    font-size: 20px;
                }
            }  

            h2:nth-child(2){
                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：隐藏字段
                    display: none;
                }
        }
    }

    Button{
        margin-top: 48px; // 按钮向上间距

        font-weight: 500;
        border: 1px solid #dcdcdc;
        border-radius: 10px;

        font-size: 17px;

        height: 45px;
        width: 135px;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：按钮缩小、向上
            margin-top: 18px;
            font-size: 19px;

            height: 45px;
            width: 145px;
        }
    }
`;

export const CatalogBottom = styled.div ` // 数字字体
    display: flex;
    justify-content: space-around; // 分布居中

    div{
        margin-top: 42px; // 字体向上间距

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：蓝字向上
            margin-top: 12px;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：蓝字向上
            margin-top: 25px;
        }

        p{
            color: #2894FF; // 字体蓝色
            font-size: 28px;

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：缩小字体
                font-size: 16px;
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：大字缩小
                font-size: 18px;
            }
        }
    }


`;
