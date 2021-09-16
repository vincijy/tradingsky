import styled from 'styled-components';
import main from '@/assets/img/pirate_main.jpeg';
import join from '@/assets/img/pirate_in.png';

export const PirateWrapper = styled.div `
    .title{
        height: 800px; // 整体大小
        background: url(${main}) no-repeat center; // 图片填充
        background-size: 95% 95%;
        margin-top: -20px; // 向上合并一点

        @media screen and (min-width: 1550px) {
            height: 1000px; // 宽屏适配
        }

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：背景图片大小
            height: 220px;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：背景图片缩小
            height: 450px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：背景图片缩小
            height: 600px;
        }

    }

    .join-us{
        height: 800px; // 整体大小
        background: url(${join}) no-repeat center; // 图片填充
        background-size: 125% 125%;
        margin-top: 30px; // 向上合并一点
        margin-bottom: 10px; // 向footer的间距

        @media screen and (min-width: 1550px) {
            height: 1000px; // 宽屏适配
        }

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：背景图片大小、向下移动
            height: 250px;
            margin-top: 140px;
            margin-bottom: 40px; // 向footer的间距
            background-size: 160% 130%;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：背景图片缩小
            height: 450px;
            margin-top: 110px;
            margin-bottom: 35px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：背景图片缩小
            height: 600px;
            margin-top: 50px;
            margin-bottom: 45px;
        }

        .content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 25%; // 内容下移幅度

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：海盗页面
                height: 0%;
            }

            h2{
                font-size: 60px;
                margin-top: 20px; // 文字向上间距
                margin-bottom: 20px; // 文字向下间距

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：大字大小
                    font-size: 28px;
                    margin-top: 0px; // 文字向上间距
                    margin-bottom: 10px;
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：背景图片缩小
                    font-size: 40px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：背景图片缩小
                    font-size: 50px;
                }

            }
            p{
                margin-bottom: 12px;
                font-size: 20px;
                text-align: center; // 文字居中

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：小字大小
                    font-size: 16px;
                }
            }

            p:nth-child(3){
                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：小字间距
                    margin-bottom: 55px;
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：小字间距
                    margin-bottom: 100px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：背景图片缩小
                    margin-bottom: 70px;
                }
            }

        }
    }
`;
