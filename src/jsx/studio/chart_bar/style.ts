import styled from 'styled-components';
import * as Layout from '@/config/layout';
export const BarWrapper = styled.div `
    .bar {
        padding: ${Layout.GAP_BAR_PADDING}px 0px;
        display: flex;
        justify-content: space-between;
        background: white;
        position: relative;
    }
    .btn-area {
        line-height: 32px;
    }
    Button {
        padding: 0px 15px;
        margin-right: 10px;
        height: ${Layout.GAP_BAR_BTN_HEIGHT}px;
    }
    .lsc-head-wrapper {
        position: absolute;
        left: calc(50% - ${Layout.GAP_BAR_PADDING}px);
        transform: translateX(-50%);
    }
    .chart-head-img {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: text-bottom;
        /* border: 1px solid red; */
        top:50%;
        transform: translateY(-50%);
        left:2px;
        margin-right: 10px;
    }

    .chart-title {
        font-size: 17px;
        display: inline-block;
        vertical-align: baseline;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .asset-selector {
        text-align: left;
    }
`;
