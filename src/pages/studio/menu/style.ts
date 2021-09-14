import styled from 'styled-components';

export const MenuWrapper = styled.div `

    .ant-menu-item{
        margin: -4.3px 0;  // 所有Item
    }

    .ant-menu-title-content{
        font-size: 14px;  // 全部字体
    }

    .ant-menu-sub{
        span{
            font-size: 12.6px;  // 全部小字
        }
    }

    .ant-menu-submenu-active{
        background: #e0e0e0 !important;  // 鼠标滑过类别栏
    }

    .ant-menu-item-active{
        background: #e0e0e0 !important;  // 鼠标滑过Item
    }

    .ant-menu-item-selected{
        background: #3c3c3c !important;  // 鼠标选中Item
        border-radius: 3px;

        span{
            color: white;  // 选中后字体变成白色

            .free-icon{
                color: rgb(104, 113, 152); // L1图标不变色
            }

            .vip-icon{
                color: rgb(254, 109, 145); // L2图标不变色
            }
        }

        ::after{
            display: none !important;  // 隐藏黑线
        }
    }

`;
