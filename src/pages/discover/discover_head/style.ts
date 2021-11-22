import styled from 'styled-components';
import { isMobile } from '@/utils/is';

export const DiscoverMenu = styled.div `
    @media screen and (min-width: 700px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .ant-menu-horizontal{
        background-color: rgb(249, 247, 249);
    }
`;
