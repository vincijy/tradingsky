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

    .my-favorite{ // 收藏栏
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-top: 1px solid rgba(0, 0, 0, 0.1);

        .ant-menu-sub{
            // height: 40px;
        }
    }
    .asset-select{ // 数据切换
        display: flex;
        width:200%;
        justify-content: center;
        margin: 10px 0;
        img{ // 两个小icon
            width: 16px;
            height: 16px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 4px;
            margin-bottom: 2px;
        }
    }
    .tag-new {
        color: orange;
        /* background: black; */
        margin-left: 2px;
        font-size: 10.6px;
        padding: 2px 4px;
        border-radius: 10%;
    }
`;


export const MenuWrapperPC = styled.div `
    .tab-cell {
        /* border: 1px solid red; */
        /* border: 1px solid rgba(130,148,178,.2); */

        width: 68px; // 5 * 12 = 60
        user-select: none;
        white-space: normal;
        div {
            text-align: center;
            width: 100%;
        }
        .tab-cell-name {
            font-size: 12px !important;
        }
    }

    // 母菜单
    .ant-tabs-tab {
        // TODO
        padding: 15px 0px!important;
        text-align: center;
        margin: 0px 0px !important; // 上下间距调整
        width: 100% !important;
        background: white !important; // 不被点击时：白色背景
        border-bottom: none !important; // 去掉边框
        border-top: none !important;
    }

    // 母菜单被选中
    .ant-tabs-tab-active{
        background: #E5E8E8 !important;
    }

    // 子菜单
    .tab-content {
        white-space: normal;
        padding: 14px 0px;
        cursor: pointer;
        margin-left: -20px;
        padding-left: 8px;
        text-align: left;
        font-size: 12px;
    }
    
    // 滑过子菜单
    .tab-content:hover {
        font-weight: bold;
        cursor: pointer;
    }

    .ant-tabs-tab .anticon {
        margin-right: 0px;
    }
    
    .ant-tabs-content-holder {
        /* background: #e9effa; */
    }
    .tag-new {
        color: #f50;
        margin-left: 2px;
        font-size: 10.6px;
        padding: 2px 4px;
        border-radius: 10%;
    }
    .tab-content-title {
        margin-top: 10px;
        padding-bottom: 10px;
        margin-left: -20px;
        padding-left: 8px;
        text-align: left;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(130,148,178,.2);
        .toggle-btn {
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
            background-color: #fff;
            box-shadow: 0 2px 3px 0 rgb(18 58 115 / 20%);
            border-radius: 50%;
            transition: color .3s,background-color .3s;
            margin-right: 5px;
        }
        .toggle-btn:hover {
            background: #e9effa;
        }
    }

    .level1{
        color: red; // L1图标不变色
        margin-left: 10px;
    }

    .level2{
        color: darkblue; // L2图标不变色
        margin-left: 10px;
    }
`;
