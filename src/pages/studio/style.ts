import styled from 'styled-components';

export const ChartWrapper = styled.div `
    display: flex;
    margin-top: -10px;
    border-top: #f0f0f0 0.1px solid;
`;

export const ChartLeft = styled.div `
    .side{
        overflow: auto;  // 上下滚轮
        height: 1235px;
        background-color: white;
    }
`;

export const ChartRight = styled.div `
    margin-left: 28px;
`;
