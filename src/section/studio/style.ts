import styled from 'styled-components';
import * as D from './def';
import { Props } from './def';
// import { useAppSelector } from '@hooks';

// const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
// const { introduce } = selectedSubMenu;

export const ChartWrapper = styled.div `
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1); // 上边框
    width: 100%;
    overflow-x: hidden;
    
    .site-layout-background {
        text-align: center;
        // TODO: css layout design
        // border: 1px solid red;
    }

    // 包含了右侧的所有
    .right-content-wrapper {
        margin: 0px 13px; // 避免移动端出现左右的滚动条
        padding: 0px 16px;
        overflow: 'initial';
        @media screen and (min-width: 0px) and (max-width: 767px) { // 移动端适配
            margin: 0px 0px; // 避免移动端出现左右的滚动条
            padding: 0px 0px;
            width: 100%;
        }
    }
`;

export const ChartLeft = styled.div<Props> `
    .side{
        /* overflow: auto;  // 上下滚轮 */
        overflow-y: hidden;
        height: ${ (props) => `${props.height + 50}px` };
        background-color: white;
        border-right: 1px solid rgba(0, 0, 0, 0.1); // 菜单栏右边框

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：放大高度
            height: ${ (props) => `${props.height + 110}px`} ;
        }

        @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：放大高度
            height: ${ (props) => `${props.height + 80}px` };
        }

        @media screen and (min-width: 1550px) {
            height: ${ (props) => `${props.height + 180}px` }; // 大屏适配
        }
    }
`;

export const ChartRight = styled.div `
    margin-left: 28px;
`;

export const AppFooter = styled.div `
    .content{
        @media screen and (min-width: 1550px) {
            max-width: 1900px; // 宽屏适配，修复图表页面的footer
        }

        .footer-iphone{
            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：隐藏icon
                display: none;
            }
        }
    }
`;

export const SiteModal = styled.div `
    width: 100%;
    opacity: 0.8;
    background: black;
    z-index: 2;
`;