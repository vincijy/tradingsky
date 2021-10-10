import styled from 'styled-components';
import * as Layout from '@/config/layout';

export const BarWrapper = styled.div `
    .bar {
        padding: ${Layout.GAP_BAR_PADDING}px 0px;
        display: flex;
        align-items: flex-start;
        // border: 1px solid red;
    }
    Button {
        padding: 0px 15px;
        margin-right: 10px;
        height: ${Layout.GAP_BAR_BTN_HEIGHT}px;
    }
`;
