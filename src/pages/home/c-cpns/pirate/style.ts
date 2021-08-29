import styled from 'styled-components';
import { ossImgs } from '@/oss';

export const PirateWrapper = styled.div `
    height: 800px; // 整体大小
    
    @media screen and (min-width: 1550px) {
        height: 1000px; // 宽屏适配
    }

    @media screen and (max-width: 450px) { // 移动端适配 iPhone：背景图片大小
        height: 220px;
    }

    @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：背景图片缩小
        height: 450px;
    }

    @media screen and (min-width: 900px) and (max-width: 1100px) { // 移动端适配 iPad pro：背景图片缩小
        height: 600px;
    }

    background: url(${ossImgs.homePirate}) no-repeat center; // 图片填充
    background-size: 95% 95%;
    margin-top: -80px; // 向上合并一点

    @media screen and (max-width: 450px) { // 移动端适配 iPhone：向下移动
        margin-top: 20px;
    }

    @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：向下移动
        margin-top: 0px;
    }

    @media screen and (min-width: 900px) and (max-width: 1100px) { // 移动端适配 iPad pro：水平 垂直 对齐
        margin-top: 10px;
    }

    .content{
        margin-left: 50%; // 左侧水平居中
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;

        .container{
            margin-top: 31%; // 文字垂直居中

            @media screen and (max-width: 450px) { // 移动端适配 iPhone：水平 垂直 对齐
                margin-top: 25%;
                margin-left: 10px;
            }

            @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：水平 垂直 对齐
                margin-top: 23%;
            }

            h2{
                font-size: 60px; // 标题大小和间距
                margin-bottom: 50px;

                @media screen and (max-width: 450px) { // 移动端适配 iPhone：文字缩小
                    font-size: 20px;
                    margin-bottom: 0px;
                }

                @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：水平 垂直 对齐
                    font-size: 42px;
                    margin-bottom: 0px;
                }

                @media screen and (min-width: 900px) and (max-width: 1100px) { // 移动端适配 iPad pro：水平 垂直 对齐
                    font-size: 52px;
                    margin-bottom: 0px;
                }
            }

            p{
                font-size: 32px; // 介绍大小和间距
                margin-top: 10px;

                @media screen and (max-width: 450px) { // 移动端适配 iPhone：文字缩小
                    font-size: 10px;
                    margin-top: 10px;
                }

                @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：文字缩小
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

                @media screen and (max-width: 450px) { // 移动端适配 iPhone：按钮缩小
                    margin-top: 18px;
                    font-size: 7px;

                    height: 28px;
                    width: 100px;
                }

                @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：按钮向上
                    margin-top: 38px;
                }
            }
        }
    }
`;