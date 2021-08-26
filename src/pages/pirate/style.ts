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
    }

    .join-us{
        height: 800px; // 整体大小
        background: url(${join}) no-repeat center; // 图片填充
        background-size: 125% 125%;
        margin-top: 30px; // 向上合并一点
        margin-bottom: 30px; // 向footer的间距

        @media screen and (min-width: 1550px) {
            height: 1000px; // 宽屏适配
        }

        .content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 25%; // 内容下移幅度

            h2{
                font-size: 60px;
                margin-top: 20px; // 文字向上间距
                margin-bottom: 20px; // 文字向下间距
            }
            p{
                margin-bottom: 12px;
                font-size: 20px;
                text-align: center; // 文字居中
            }
        }
    }
`;