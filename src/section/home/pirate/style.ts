import styled from 'styled-components';
import { ossImgs } from '@oss';

export const PirateWrapper = styled.div `
    height: 800px; // 整体大小
    
    @media screen and (min-width: 1550px) {
        height: 1000px; // 宽屏适配
    }

    @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：背景图片大小
        height: 230px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：背景图片缩小
        height: 450px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：背景图片缩小
        height: 600px;
    }

    /* background: url(${ossImgs.chart_0}) no-repeat center; // 图片填充 */
    background-size: 95% 95%;
    margin-top: -60px; // 向上合并一点

    @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：向下移动
        margin-top: 115px;
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：向下移动
        margin-top: 5px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：水平 垂直 对齐
        margin-top: 5px;
    }

    .content{
        margin-left: 50%; // 左侧水平居中
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：自由排版
            display: block;
            margin-left: 0%;
        }

        .container{
            margin-top: 31%; // 文字垂直居中

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：水平 垂直 对齐
                margin-top: 25%;
                margin-left: 10px;
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：水平 垂直 对齐
                margin-top: 23%;
            }

            h2{
                font-size: 60px; // 标题大小和间距
                margin-bottom: 50px;

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：文字缩小
                    font-size: 28px;
                    margin-bottom: 0px;
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：水平 垂直 对齐
                    font-size: 42px;
                    margin-bottom: 0px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：水平 垂直 对齐
                    font-size: 52px;
                    margin-bottom: 0px;
                }
            }

            p{
                font-size: 32px; // 介绍大小和间距
                margin-top: 10px;

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：文字缩小
                    font-size: 16px;
                    margin-top: 10px;
                    margin-left: 50%;
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：文字缩小
                    font-size: 32px;
                    margin-bottom: 0px;
                }
            }

            Button{
                margin-top: 48px; // 按钮向上间距

                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 10px;

                font-size: 17px;

                height: 45px;
                width: 115px;

                background-color: #2894FF; // 天蓝色

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：按钮缩小
                    margin-top: 18px;

                    font-size: 19px;
                    height: 45px;
                    width: 145px;

                    margin-left: 50%;
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：按钮向上
                    margin-top: 38px;
                }
            }
        }
    }
`;
