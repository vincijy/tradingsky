import styled from 'styled-components';

export const HeaderWrapper = styled.div `
    margin: 0px 32px;

    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;  // 导航栏上下宽度
        margin-top: -10px;
    
        @media screen and (min-width: 1550px) {
            max-width: 2000px; // 宽屏适配：铺满页面
        }
        
        .logo-nav:hover{
            border-bottom: none;  // 鼠标指向去下划线
        }
    }

    a:hover,li:hover{
        font-weight: bolder;
    }

`;

export const HeaderLeft = styled.div `
    .select-list{
        display: flex;
        align-items: center;

        .logo{
        width: 150px;
        text-align: center;
        font-size: 25px;
        font-family: "Rusty - Demo";
        }

        .separator{
            height: 35px;
            width: 1px;
            background: #000;
            margin-left: 35px; // 下划线与logo的距离
            margin-right: 15px;
        }

        li{
            font-size: larger;
            font-weight: bold;
            padding: 0 13px;
        }

        a:hover {
            border-bottom: 2px solid #000;
        }

        .active{
            border-bottom: 2px solid #000;
        }

        .logo-nav{
            border-bottom: none;  // logo去下划线
        }
    }
`;

export const HeaderRight = styled.div `
    display: flex;
    align-items: center;

    .side{
        font-size: 23px;
        a{
            margin: 0 10px;
        }
        .most-right{ // 最右边图标的间距
            margin-right: 15px;
        }
    }

    .personal-bar{

        .user-logo{
            margin-right: 8px;  // 用户头像
        }



        .btn{
            margin-right: 5px;
            
            Button:nth-child(1){
                background: #fff;
                font-weight: 500;
                border: 1px solid #dcdcdc;
                border-radius: 2px;
                width: 73px;
                height: 32px;

                margin-right: 15px;
            }

            Button:nth-child(2){
                height: 32px;
                width: 73px;
                border: 0;
                border-radius: 2px;
                
            }
        }
    }
`;
