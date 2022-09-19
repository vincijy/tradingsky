import styled from 'styled-components';

export const CatalogWrapper = styled.div `
    padding: 16px 32px;

    a:hover,li:hover{
        font-weight: bolder;
    }
`;

export const CatalogTop = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;  // 居中对齐
    margin-bottom: -32px; // fix：目录上移
    
    h2{
        font-size: 36px;
    }

    p{
        font-size: 21.5px;

        a{
            font-weight: lighter;
        }
    }
`;

export const CatalogBottom = styled.div `
    margin-top: 48px;
`;
