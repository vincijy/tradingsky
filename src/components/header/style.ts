import styled from 'styled-components';
import { NAV_BAR_HEIGHT } from '@config/layout';

export const HeaderWrapper = styled.div `
    margin: 0px 32px;

    .header-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: ${NAV_BAR_HEIGHT}px;  // 导航栏上下宽度  
        @media screen and (min-width: 1550px) {
            max-width: 2000px; // 宽屏适配 大显示器：铺满页面
        }

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：header铺开
            max-width: 327px;
        }

        .logo-nav:hover{
            border-bottom: none;  // 鼠标指向去下划线
            font-weight: normal;  // 取消logo的变粗效果
        }
    }

    a:hover,li:hover{
        font-weight: bolder;
    }
`;

export const HeaderLeft = styled.div `
    .select-list{
        display: flex;
        align-items: center;

        .logo{
            width: 150px;
            text-align: center;
            font-size: 25px;
            font-family: "Rusty - Demo";

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：logo大小
                width: 100px;
            }
        }

        .separator{
            height: 35px;
            width: 1px;
            background: #000;
            margin-left: 35px; // 下划线与logo的距离
            margin-right: 15px;

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：隐藏分隔线
                display: none;
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：隐藏分隔线
                display: none;
            }
        }

        li{
            font-size: larger;
            font-weight: bold;
            padding: 0 13px;

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：隐藏导航栏
                display: none;
            }
        }

        a:hover {
            border-bottom: 2px solid #000;
        }

        .active{
            border-bottom: 2px solid #000;
        }

        .logo-nav{
            border-bottom: none;  // logo去下划线
        }
    }
`;

export const HeaderRight = styled.div `
    display: flex;
    align-items: center;

    .side{
        font-size: 23px;
        a{
            margin: 0 10px;
        }
        .most-right{ // 最右边图标的间距
            margin-right: 15px;
        }

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone；隐藏图标
           display: none;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：隐藏宣传icon
           display: none;
        }
    }

    .personal-bar{

        .user-logo{
            margin-right: 8px;  // 用户头像
        }

        .btn{
            margin-right: 5px;
            display: flex;
            
            Button:nth-child(1){
                background: #fff;
                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 6px;
                width: 63px;
                height: 30px;

                margin-right: 15px;

                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：缩小按钮
                    width: 55px;
                    height: 32px;
                    font-size: 12px;
                }
            }

            Button:nth-child(2){
                height: 30px;
                width: 63px;
                border: 0;
                border-radius: 6px;
                background-color: #4040FF;
                
                @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：缩小按钮
                    width: 55px;
                    height: 32px;
                    font-size: 12px;
                }
            }
        }
    }
`;
