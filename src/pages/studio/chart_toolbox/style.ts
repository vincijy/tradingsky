import styled from 'styled-components';
import * as Layout from '../../../config/layout';

export const ToolBoxWrapper = styled.div `
    // 布局
    position: absolute;
    top: ${Layout.CHART_TOOLBOX_TOP}px;
    z-index: 1;
    background: white;
    border: 1px solid rgb(226, 226, 226);
    .content{
        text-align: left;
        font-size: large;
        // border: 1px solid red;
        width: 100%;
    }
    .toolbox-cell {
        border-right: 1px solid rgb(226, 226, 226);
        padding: 0.15rem 1rem;
        cursor: pointer;
    }
    .toolbox-cell-text-up {
        font-size: 0.65rem;
        color: rgb(128, 128, 128);
        white-space: nowrap;
    }
    .toolbox-cell-text-down {
        font-size: 0.8rem;
    }
    li {
        // border-top: 1px solid rgb(226, 226, 226);
        // border-bottom: 1px solid rgb(226, 226, 226);
    }
    ul {
        display: flex;
        // border-left: 1px solid rgb(226, 226, 226);
    }

    .toolbox-btn-icon {
        color: rgb(128, 128, 128);
        font-size: 0.625rem; // 这个无效, 会被antd-card中的css强行覆盖
        margin-left: 0.5rem;
        display: inline;
    }
`;
