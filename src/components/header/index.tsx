// 第三方
import React, { memo, useState, useLayoutEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

// 功能
import { headerLinks } from '@/config/header'; // 映射数据

// 组件
import { Button, Menu, Dropdown, Avatar } from 'antd'; // 组件库
import { WeiboOutlined, WechatOutlined, TwitterOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'; // 图标

import { AuthingGuard, GuardMode, GuardScenes } from '@authing/react-ui-components'; // 登录框
import '@authing/react-ui-components/lib/index.min.css';
import { AuthenticationClient } from 'authing-js-sdk'; // 登录SDK

import smallLogo from '@/assets/img/logo.png';
import { setLoginPanelVisible } from '@/store/ui/action';
import { getUserRole, makeUserRole } from '@/api/user';
import * as UA from '@/store/user/action'; // 改变登录状态

import { IUserInfo } from '@/store/user/def';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'; // 样式


export default memo(function LSAppHeader() {
  const loginPanelVisible = useAppSelector((state) => state.ui.loginPanelVisible);

  const [config, setConfig] = useState({
    mode: GuardMode.Modal,
    title: '欢迎来到LianShuCha',
    defaultScenes: GuardScenes.Login,
    // escCloseable: 'true',
    logo: `${smallLogo}`,
    contentCss: 'true',
  });

  // hook
  const dispatch = useAppDispatch();
  const history = useHistory();

  const isLogin = useAppSelector((state) => state.user.isLogin);
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const authenticationClient = new AuthenticationClient({
    appId: '61160ec791133eecb2c0978b',
    appHost: 'https://lianshucha.authing.cn',
    token: userInfo.token || '',
  });

  // handle
  // TODO: fix any type
  const showItem = (item:any, index:number) => {
    if(index < 3){
      return (
        <NavLink
          exact
          to={item.link}
          activeClassName='active'>
          {item.title}
        </NavLink>
      );
    }else{
      return (
        <a
          href={item.link}
          rel='noreferrer'
          target='_blank' >{item.title}
        </a>
      );
    }
  };

  const LogoutButton = () => { // 退出登录
    openChartPage();
    authenticationClient.logout();
    dispatch(UA.toggleLogin({
      isLogin: false,
    }));
    localStorage.removeItem('userInfo');
  };

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
        onClick={LogoutButton}
        key='3'>退出登录
      </Menu.Item>
    </Menu>
  );

  // handel function
  const loginShow = () => {
    const action = setLoginPanelVisible({ loginPanelVisible: true });
    dispatch(action);
  };

  const registerShow = () => {
    setConfig({ ...config, defaultScenes: GuardScenes.Register });
    const action = setLoginPanelVisible({ loginPanelVisible: true });
    dispatch(action);
  };

  const onCloseModal = () => {
    document.addEventListener('click', (e) => {
      e.composedPath().forEach((el:EventTarget) => {
        if (!(el instanceof Element)) {
          return;
        }
        if (el.classList && el.classList.contains('authing-guard-mask')) {
          const action = setLoginPanelVisible({ loginPanelVisible: false });
          dispatch(action);
        }
      });
    });
  };

  const openChartPage = () => {
    history.push('/chart');
  };

  useLayoutEffect(() => {
    // hack, 将logo替换成文本
    const logo = document.querySelector('.logo');
    const div = document.createElement('div');
    div.setAttribute('class', 'logo');
    div.innerText = 'Lianshucha';
    logo?.replaceWith(div);
  });

  // JSX
  return (
    <HeaderWrapper>
      <div>
        <AuthingGuard
          appId={'61160ec791133eecb2c0978b'}
          config={config}
          visible={isLogin ? false : loginPanelVisible} //
          onClose={() => { // 关闭
            const action = setLoginPanelVisible({ loginPanelVisible: false });
            dispatch(action);
          }}
          onLoad={() => { // 加载中
            onCloseModal();
          }}
          onLogin={(userInfo:IUserInfo) => { // 成功登录
            openChartPage();

            dispatch(UA.toggleLogin({
              isLogin: true,
            }));
            dispatch(UA.updateUserInfo({
              userInfo,
            }));

            // 缓存
            const v = JSON.stringify(userInfo);
            localStorage.setItem('userInfo', v);

            // 获取权限
            getUserRole()
              .then((res) => {
                userInfo.role = res.data;
                const v = JSON.stringify(userInfo);
                localStorage.setItem('userInfo', v);
                window.location.reload();
              })
              .catch((err) => {
                console.error(err);
              });

          }}
          onRegister={(userInfo:IUserInfo) => { // 成功注册
            openChartPage();
            dispatch(UA.updateUserInfo({
              userInfo,
            })); // 把注册用户信息存入redux
            makeUserRole() // 添加level1角色
              .then((res) => {
                userInfo.role = res.data;
                const v = JSON.stringify(userInfo);
                localStorage.setItem('userInfo', v);
              })
              .catch((err) => {
                console.error(err);
              });
          }}
          onRegisterInfoCompleted={() => { // 成功补充注册信息
            window.location.reload(); // 提交后刷新页面
          }}
          onLoginError={() => {
            console.error('提示：出现错误');
          }}
        />
      </div>
      <div className='content text-nowrap'>
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
                  <Button onClick={loginShow}>登录</Button>
                  <Button
                    onClick={registerShow}
                    type='primary'>注册
                  </Button>
                </div>
            }
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
});
