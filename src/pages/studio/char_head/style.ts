import styled from 'styled-components';
import * as Layout from '../../../config/layout';

export const ChartTitleArea = styled.div `
    position: absolute;
    top: ${Layout.CHART_HEADER_TOP}px;
    height: ${Layout.CHART_HEADER_HEIGHT}px;
    z-index: 1;
    text-align: left;
    .lsc-head-wrapper {
        /* border: 1px solid black; */
        height: 100%;
        position: relative;
        /* width: 80vw; */
        /* z-index: 0; */
    }
    .chart-head-img {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: text-bottom;
        /* border: 1px solid red; */
        position: absolute;
        top: calc(50% + 1px); // 1px 的原因? TODO
        transform: translateY(-50%);
        left:2px;
    }

    .chart-title {
        font-size: 1rem;
        display: inline-block;
        vertical-align: baseline;
        /* border: 1px solid red; */
        position: absolute;
        top: calc(50% + 1px); // 1px 的原因? TODO
        left: 20px;
        transform: translateY(-50%);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
`;
