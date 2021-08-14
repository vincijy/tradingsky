import styled from 'styled-components'

export const MainWrapper = styled.div`
    padding: 0px 64px;

    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
`

export const MainLeft = styled.div`
    .container{
        width: 640px;

        h2{
            font-size: 52px;
            line-height: 50px;
        }

        p{
            font-size: 18px;
            line-height: 32px;
            margin-top: 30px;
        }

        Button{
            height: 60.88px;
            width: 169.88px;
            
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            line-height: 50px;

            margin-top: 30px;
        }
    }
`

export const MainRight = styled.div`
    img{
        width: 450px; 
    }
`
