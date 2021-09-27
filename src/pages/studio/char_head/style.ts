import styled from 'styled-components';
import * as Layout from '../../../config/layout';

export const ChartTitleArea = styled.div `
    position: absolute;
    top: ${Layout.CHART_HEADER_TOP}px;
    height: ${Layout.CHART_HEADER_HEIGHT}px;
    z-index: 1;
    text-align: left;
    img {
        widht: 1rem;
        height: 1rem;
        display: inline-block;
        vertical-align: middle;
        margin-left: 4px;
        margin-bottom: 2px;
    }

    .chart-title {
        font-size: 1rem;
        display: inline-block;
        vertical-align: middle;
        height: ${Layout.CHART_HEADER_HEIGHT}px;;
        line-height: ${Layout.CHART_HEADER_HEIGHT}px;;
        margin-left: 4px;
    }
`;
