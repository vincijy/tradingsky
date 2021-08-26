import styled from 'styled-components';
import price from '@/assets/img/home_main.jpeg';

export const MainWrapper = styled.div `
    height: 800px; // 整体大小
    @media screen and (min-width: 1550px) {
        height: 1000px; // 宽屏适配
    }
    
    background: url(${price}) no-repeat center; // 图片填充
    background-size: 95% 95%;

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 85%; // 内容下移幅度

        h2{
            font-size: 52px;
            margin-bottom: 36px; // 文字上下间距
        }
        p{
            margin-top: 52px;
            font-size: 22px;
            text-align: center; // 文字居中
        }

        .btns{
            text-align: center;
            margin-top: 70px; // 按钮向上间距

            Button:nth-child(1){
                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 5px;

                font-size: 17px;

                height: 45px;
                width: 135px;

                margin-right: 110px; // 两个按钮的左右间距
            }

            Button:nth-child(2){
                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 5px;

                font-size: 17px;

                height: 45px;
                width: 135px;


                background-color: #2894FF; // 天蓝色
            }
        }
    }

`;

