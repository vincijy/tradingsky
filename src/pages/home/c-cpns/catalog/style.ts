import styled from 'styled-components';
import { ossImgs } from '@/oss';

export const CatalogWrapper = styled.div `
    height: 800px; // 整体大小
    background: url(${ossImgs.homeCatalog}) no-repeat center; // 图片填充
    background-size: 95% 95%;
    margin-top: -100px; // 向上合并一点

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
