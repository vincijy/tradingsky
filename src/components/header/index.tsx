// 第三方
import { memo, useLayoutEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

// 功能
import { headerLinks } from '@/config/header'; // 映射数据

// 组件
import { Menu, Dropdown, Avatar } from 'antd'; // 组件库
import discordLogo from '@/assets/img/discord_logo.svg';
import { WeiboOutlined, WechatOutlined, TwitterOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'; // 图标

import '@authing/react-ui-components/lib/index.min.css';

import smallLogo from '@/assets/img/logo.png';
import * as UA from '@/store/user/action';
import { getAuthingClient } from '@/authing';
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
          exact
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

  useLayoutEffect(() => {
    // hack, 将logo替换成文本
    const logo = document.querySelector('.logo');
    const div = document.createElement('div');
    div.setAttribute('class', 'logo');
    div.innerText = 'Lianshucha';
    logo?.replaceWith(div);
  });

  const menu = (
    <Menu>
      <Menu.Item key='0'>
        <NavLink to='/chart' >图表数据</NavLink>
      </Menu.Item>
      <Menu.Item key='1'>
        <NavLink to='/setting' >个人信息</NavLink>
      </Menu.Item>
      <Menu.Divider />
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
          <ul className='select-list'>
            <NavLink
              className='logo-nav'
              to='/'><img
                className='logo'
                src={''} />
            </NavLink>
            <div className='separator' />
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
          <div className='side'>
            <a
              href='https://discord.gg/jmKw6PRQ7W'
              target='_blank'
              rel='noreferrer'>
              <img style={{ height: '17.5px', marginBottom: '3.5px' }} src={discordLogo} />
            </a>
            <a
              href='https://weibo.com/u/7657665166?is_all=1'
              target='_blank'
              rel='noreferrer'>
              <WeiboOutlined />
            </a>
            <a
              // href='https://mp.weixin.qq.com/s/5ps_OcxPWA96fKUn4ozsZg'
              href='https://weibo.com/u/7657665166?is_all=1'
              target='_blank'
              rel='noreferrer'>
              <WechatOutlined />
            </a>
            <a
              href='https://twitter.com/Lianshucha'
              target='_blank'
              rel='noreferrer'>
              <TwitterOutlined className='most-right' />
            </a>
          </div>
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
                      src={smallLogo} />
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
