import styled from 'styled-components';

export const DeclareWrapper = styled.div `
    .declare-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px 10px;
        background: #F5F5F6;
        color: white;
        font-size: 12px;
        height: 300px;
        h2{
            font-size: 21px;
            text-align: center;
            font-weight: bold;
            color: #404EED;

        }
        p{
            font-size: 16px;
            margin-top: 30px;
            color: #404EED;
            text-align: center;
            line-height: 30px;
        }
        .btn-area {
            text-align: center;
            .btn {
                padding: 0 50px;
                height: 50px;
                line-height: 48px;
                display: inline-block;
                background-color: #404EED;
                border-radius: 4px;
                font-size: 16px;
                margin: 25px auto 25px;
                text-decoration: none;
                font-weight: bold;
                box-sizing: border-box;
                // border: 2px solid black;
                transition: opacity 0.3s;
                color: #fff;
            }
        }
    }
`;