// 第三方
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

// 功能
import { headerLinks } from '@/common/local-data'  // 映射数据

// 组件
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'  // 样式
import { Button, } from 'antd'  // 组件库
import { WeiboOutlined, WechatOutlined } from '@ant-design/icons'  // 图标
import logo from '@/assets/img/logo.svg'

export default memo(function LSAppHeader() {
    // handle
    // TODO: fix any type
    const showItem = (item:any, index:number) => {
        if(index < 3){
            return (
                <NavLink to={item.link} activeClassName="active">
                    {item.title}
                </NavLink>
            )
        }else{
            return (
                <a href={item.link} target="_blank" >{item.title}</a>
            )
        }
    }

    // JSX
    return (
        <HeaderWrapper>
            <div className="content text-nowrap">
                <HeaderLeft>
                    <ul className="select-list">
                        <NavLink className="logo-nav" to="/home"><img className="logo" src={logo} /></NavLink>
                        <div className="separator"></div>
                            {
                                headerLinks.map((item, index) => {
                                    return (
                                        <li key={item.title}>
                                            {showItem(item,index)}
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    <div className="side">
                        <a href="https://weibo.com/u/7657665166?is_all=1" target="_blank">
                            <WeiboOutlined />
                        </a>
                        <a className="wechat" href="https://mp.weixin.qq.com/s/5ps_OcxPWA96fKUn4ozsZg" target="_blank">
                            <WechatOutlined className="wechat" />
                        </a>
                    </div>
                    <div className="btn">
                        <Button >登陆</Button>
                        <Button type="primary">注册</Button>
                    </div>
                </HeaderRight>
            </div>
        </HeaderWrapper>
    )
})
