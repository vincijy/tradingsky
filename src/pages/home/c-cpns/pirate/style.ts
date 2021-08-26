import styled from 'styled-components';
import pirate from '@/assets/img/home_pirate.png';

export const PirateWrapper = styled.div `
    height: 800px; // 整体大小
    
    @media screen and (min-width: 1550px) {
        height: 1000px; // 宽屏适配
    }

    background: url(${pirate}) no-repeat center; // 图片填充
    background-size: 95% 95%;
    margin-top: -80px; // 向上合并一点

    .content{
        margin-left: 50%; // 左侧水平居中
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;

        .container{
            margin-top: 31%; // 文字垂直居中

            h2{
                font-size: 60px; // 标题大小和间距
                margin-bottom: 50px;
            }

            p{
                font-size: 32px; // 介绍大小和间距
                margin-top: 10px;
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
            }
        }
    }
`;