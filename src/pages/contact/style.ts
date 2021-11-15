import styled from 'styled-components';
export const ContactWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 45px;
    
    margin: 115px;

    .card-bottom{
        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配
            display: none;
        }
    }

    .card-top{
        display: flex;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配
            display: block;
        }
    }
`;

export const ContactPageWrapper = styled.div `
`;

export const CatalogBottom = styled.div `
    margin-top: 48px;
`;

export const ContactPageFooter = styled.div `

    @media screen and (min-width: 1550px) {
        margin-top: 260px; // 宽屏适配
    }
`;