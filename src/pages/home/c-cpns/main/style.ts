import styled from 'styled-components';
import { ossImgs } from '@/oss';
export const MainWrapper = styled.div `
    height: 800px; // 整体大小

    @media screen and (min-width: 1550px) {
        height: 1000px; // 宽屏适配
    }

    @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：背景图片缩小
        height: 400px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：背景图片缩小
        height: 600px;
    }
    
    background: url(${ossImgs.homeMain}) no-repeat center; // 图片填充
    background-size: 95% 95%;

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 85%; // 内容下移幅度

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：内容上移
            height: 75%;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：内容上移
            height: 95%;
        }

        .main-iphone{
            display: none;

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：显示新首页字段
                display: block;
                font-size: 28px;

                text-align: center;
            }
        }

        h2:nth-child(1){
            font-size: 52px;
            margin-bottom: 36px; // 文字上下间距

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：隐藏Lianshucha
                display: none;
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：主字段大小
                font-size: 40px;
            }
        }
        p{
            margin-top: 52px;
            font-size: 22px;
            text-align: center; // 文字居中

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：字段缩小
                font-size: 16px;
            }
        }

        .btns{
            text-align: center;
            margin-top: 70px; // 按钮向上间距

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：按钮排版
                margin-top: 25px;
            }

            Button:nth-child(1){
                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 5px;

                font-size: 17px;

                height: 45px;
                width: 135px;

                margin-right: 110px; // 两个按钮的左右间距

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：按钮缩小
                    font-size: 19px;

                    height: 45px;
                    width: 145px;

                    margin-left: 30%;
                }
            }

            Button:nth-child(2){
                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 5px;

                font-size: 17px;

                height: 45px;
                width: 135px;

                background-color: #2894FF; // 天蓝色

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：按钮隐藏
                    display: none;
                }
            }
        }
    }

`;

