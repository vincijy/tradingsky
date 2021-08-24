import styled from 'styled-components';

export const HeaderWrapper = styled.div `
    margin: 0px 32px;

    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;  // 导航栏上下宽度
        margin-top: -10px;
        
        .logo-nav:hover{
            border-bottom: none;  // 鼠标指向去下划线
        }
    }

    a:hover,li:hover{
        font-weight: bolder;
    }

    .authing-guard-container{
        .authing-tabs-inner{  
            .authing-tab-item__active{  // active变亮的文字
                color: black;
                /* font-weight: bold; */
            }

            .authing-tab-item__active:after{  // active的下划线
                background-color: black;
            }

            .authing-tab-pane{  // 输入框
                
            }
        }
        .authing-ant-btn-primary{  // 登录注册按钮
            background: black ;
            border-color: black ;
            border-radius: 3px ;
        }

        .authing-guard-text-btn,.authing-guard-text-btn,.authing-send-code-btn{  // 所有小字：验证码、注册、忘记密码
            color: black;
        }
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
            margin-left: 35px;
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
        .wechat{
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
    /* .side{
        display: flex;
        align-items: center;

        font-size: 23px;
        a{
            margin: 0 10px;
        }
        .wechat{
            margin-right: 15px;
        }
    }

    .btn{
        margin-right: 5px;
        margin-bottom: 5px;
        
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
    } */
`;
