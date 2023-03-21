// 第三方
import { memo } from 'react';
import * as React from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/index';
import { useHistory } from 'react-router';
import { Link as NavLink } from 'gatsby';

// 功能
import { headerLinks } from '@config/header'; // 映射数据

// 组件
import { Menu, Dropdown, Avatar } from 'antd'; // 组件库
import discordLogo from '@assets/img/discord_logo.svg';
import { WeiboOutlined, WechatOutlined, TwitterOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'; // 图标

import '@authing/react-ui-components/lib/index.min.css';

import smallLogo from '@assets/img/eth_logo.svg';
import * as UA from '@store/user/action';
import { getAuthingClient } from '@utils/authing';
import LoginButton from '../login_btn';
import RegisterButton from '../register_btn';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'; // 样式

export default memo(function LSAppHeader() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const isLogin = useAppSelector((state) => state.user.isLogin);
  const authenticationClient = getAuthingClient();

  // handle
  // TODO: fix any type
  const showItem = (item:any, index:number) => {
    if(item.title === '洞见'){
      return (
        <a
          href={item.link}
          rel='noreferrer'
          target='_blank' >{item.title}
        </a>
      );
    }else{
      return (
        <NavLink
          to={item.link}
          activeClassName='active'>
          {item.title}
        </NavLink>
      );
    }
  };

  const logout = () => { // 退出登录
    history && history.push('/chart');
    authenticationClient.logout();
    dispatch(UA.toggleLogin({
      isLogin: false,
    }));
    localStorage.removeItem('userInfo');
  };

  // useLayoutEffect(() => {
  //   // hack, 将logo替换成文本
  //   const logo = document.querySelector('.logo');
  //   const div = document.createElement('div');
  //   div.setAttribute('class', 'logo');
  //   div.innerText = 'Lianshucha';
  //   logo?.replaceWith(div);
  // });

  const menu = (
    <Menu>
      {/* <Menu.Item key='0'>
        <NavLink to='/chart' >图表数据</NavLink>
      </Menu.Item>
      <Menu.Item key='1'>
        <NavLink to='/order' >订单信息</NavLink>
      </Menu.Item>
      <Menu.Item key='2'>
        <NavLink to='/setting' >个人信息</NavLink>
      </Menu.Item>
      <Menu.Divider /> */}
      <Menu.Item
        onClick={logout}
        key='3'>退出登录
      </Menu.Item>
    </Menu>
  );

  // JSX
  return (
    <HeaderWrapper>
      <div className='header-content text-nowrap'>
        <HeaderLeft>
          <ul
            className='select-list'
            style={{ listStyle: 'none' }}>
            {/* <NavLink
              className='logo-nav'
              to='/'><img
                className='logo'
                src={''} />
            </NavLink> */}
            {/* <div className='separator' /> */}
            {
              headerLinks.map((item, index) => (
                <li key={item.title}>
                  {showItem(item, index)}
                </li>
              ))
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
          {/* <div className='side'>
            <a
              href='https://discord.gg/jmKw6PRQ7W'
              target='_blank'
              rel='noreferrer'>
              <img style={{ height: '17.5px', marginBottom: '3.5px' }} src={discordLogo} />
            </a>
            <a
              href='https://twitter.com/Lianshucha'
              target='_blank'
              rel='noreferrer'>
              <TwitterOutlined/>
            </a>
            <a
              href='https://weibo.com/u/7657665166?is_all=1'
              target='_blank'
              rel='noreferrer'>
              <WeiboOutlined />
            </a>
            <a
              href='https://mp.weixin.qq.com/s/qF_Hvqdgv3TENFjLLwgU2g'
              target='_blank'
              rel='noreferrer'>
              <WechatOutlined className='most-right' />
            </a>
          </div> */}
          <div className='personal-bar'>
            {
              isLogin ?
                <Dropdown
                  overlay={menu}
                  trigger={['click']}
                  overlayStyle={{ minWidth: '121px' }} >
                  <a
                    className='ant-dropdown-link'
                    onClick={(e) => e.preventDefault()}>
                    <Avatar
                      size='large'
                      icon={<UserOutlined />}
                      className='user-logo'
                      src={'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%2296%22%20height=%2296%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%28204,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22-apple-system,BlinkMacSystemFont,Trebuchet%20MS,Roboto,Ubuntu,sans-serif%22%20text-anchor=%22middle%22%3EV%3C/text%3E%3C/svg%3E'} />
                    <DownOutlined />
                  </a>
                </Dropdown> :
                <div
                  id='login-register-btns'
                  className='btn'>
                  <LoginButton
                    text='登录'
                    type='default' />
                  <RegisterButton
                    text='注册'
                    type='primary'
                  />
                </div>
            }
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
});
