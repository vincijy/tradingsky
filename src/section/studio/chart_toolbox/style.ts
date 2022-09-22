import styled from 'styled-components';
import { isMobile } from '@utils/is';
import * as Layout from '../../../config/layout';

export const BorderLineTop = styled.div `
    // 布局
    position: absolute;
    top: ${Layout.CHART_TOOLBOX_TOP - 1}px;
    z-index: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.1); // 边框效果
`;

export const BorderLineBottom = styled.div `
    // 布局
    position: absolute;
    top: ${ Layout.CHART_TOOLBOX_TOP + Layout.TOOLBOX_HEIGHT }px;
    z-index: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.1); // 边框效果
`;

export const ToolBoxWrapper = styled.div `
    // 布局
    position: absolute;
    top: ${Layout.CHART_TOOLBOX_TOP}px;
    z-index: 2;
    background: white;
    height: ${Layout.TOOLBOX_HEIGHT}px;
    .toolbox-content{
        height: ${Layout.TOOLBOX_HEIGHT}px;
        text-align: left;
        font-size: large;
        /* border-top: 1px solid rgba(0, 0, 0, 0.1); // 边框效果 */
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); // 边框效果 */
        width: 100%;
    }
    li {
        height: 100%;
        // border-top: 1px solid rgb(226, 226, 226);
        // border-bottom: 1px solid rgb(226, 226, 226);
    }
    ul {
        display: flex;
        height: 100%;
        // border-left: 1px solid rgb(226, 226, 226);
    }

    .toolbox-btn-icon {
        color: rgb(128, 128, 128);
        font-size: 0.625rem; // 这个无效, 会被antd-card中的css强行覆盖
        margin-left: 0.5rem;
        display: inline;
    }
`;

export const ToolBoxCellWrapper = styled.div `
    .toolbox-cell {
        border-right: 1px solid rgb(226, 226, 226);
        padding: 0.15rem 1rem;
        cursor: pointer;
        height: ${Layout.TOOLBOX_HEIGHT}px;

        // 居中
        display: flex;
        flex-direction: column;
        justify-content: center;

        // 文本不可选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: center;
    }
    .toolbox-cell-dropdown {
        height: ${Layout.TOOLBOX_HEIGHT}px;
        border-right: 1px solid rgb(226, 226, 226);
        padding: 0.15rem 1rem;
        cursor: pointer;

        // 居中
        display: flex;
        flex-direction: column;
        justify-content: center;

        // 文本不可选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: left;
    }
    .toolbox-cell-text-up {
        font-size: 0.65rem;
        // color: rgb(128, 128, 128);
        white-space: nowrap;
    }
    .toolbox-cell-text-down {
        font-size: 0.8rem;
    }

    .toolbox-btn-icon {
        margin-left: 0;
        font-size: 0.9rem;
        color: black;
        font-weight: bold;
    }
    .toolbox-btn-icon-dropdown {
        font-size: 0.625rem;
        color: black;
        font-weight: bold;
        margin-left: 0.25rem;
    }
`;
