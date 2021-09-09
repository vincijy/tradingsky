// 第三方
import React, { memo, useState } from 'react';
import { useDispatch, shallowEqual } from 'react-redux';
import { useAppSelector } from '@/hooks';

import { useHistory } from 'react-router-dom';

// 功能

// 组件
import { AuthingGuard, GuardMode, GuardScenes, initAuthClient, getAuthClient } from '@authing/react-ui-components'; // 登录框

import { Button } from 'antd';

import smallLogo from '@/assets/img/logo.png';

import { setLoginPanelVisible } from '@/pages/studio/store/action';
import { getUserRole, makeUserRole } from '@/api/user';
import { getLoginAction, getLogoutAction, getUserInfoAction } from '@/components/app-header/store/actionCreators'; // 改变登录状态

import { MainWrapper } from './style';

export default memo(function LSHomeMain() {

  // state/props
  const loginPanelVisible = useAppSelector((state) => state.uiData.loginPanelVisible); // 登录框组件的显示
  const [config, setConfig] = useState({ // 登录框组件的配置
    mode: GuardMode.Modal,
    title: '欢迎来到LianShuCha',
    defaultScenes: GuardScenes.Login,
    // escCloseable: 'true',
    logo: `${smallLogo}`,
    contentCss: 'true',
  });

  // redux hook
  const { isLogin } = useAppSelector((state) => ({ // 登录状态
    isLogin: state.headerLogin.isLogin,
  }), shallowEqual);

  // other hook
  const history = useHistory();
  const dispatch = useDispatch();

  // handle function
  const goChart = () => {
    history.push('/chart');
  };

  const loginShow = () => {
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

  return (
    <MainWrapper>
      <AuthingGuard
        appId={'61160ec791133eecb2c0978b'}
        config={config}
        visible={isLogin ? false : loginPanelVisible} //
        onClose={() => { // 关闭
          const action = setLoginPanelVisible({ loginPanelVisible: false });
          dispatch(action);
        }}
        onLoad={(v:any) => { // 加载中
          onCloseModal();
        }}
        onLogin={(userInfo:any) => { // 成功登录
          openChartPage();

          dispatch(getLoginAction());
          dispatch(getUserInfoAction(userInfo));

          // 缓存
          const v = JSON.stringify(userInfo);
          localStorage.setItem('userInfo', v);
          (window as any).userInfo = userInfo;

          // 获取权限
          getUserRole()
            .then((res) => {
              userInfo.role = res;
              const v = JSON.stringify(userInfo);
              localStorage.setItem('userInfo', v);
              (window as any).userInfo = userInfo;
            })
            .catch((err) => {
              console.error(err);
            });
        }}
        onRegister={(userInfo:any) => { // 成功注册
          openChartPage();
          dispatch(getUserInfoAction(userInfo)); // 把注册用户信息存入redux
          makeUserRole() // 添加level1角色
            .then((res) => {
              userInfo.role = res;
              const v = JSON.stringify(userInfo);
              localStorage.setItem('userInfo', v);
              (window as any).userInfo = userInfo;
            })
            .catch((err) => {
              console.error(err);
            });
        }}
        onLoginError={() => {
          console.log('提示：出现错误');
        }}
      />
      <div className='content'>
        <div className='container'>
          <h2>
                          LianShuCha：链上数据使投资变得更透明
          </h2>
          <h2 className='main-iphone'>
            链上数据使投资变得更透明
          </h2>
          <p>
                          链数查，您的链上数据访问门户，点击查看您的第一张动态数据图表
          </p>
          <div className='btns'>
            <Button
              type='primary'
              onClick={() => goChart()} >查看动态图表
            </Button>
            <Button
              type='primary'
              onClick={() => loginShow()} >立即注册
            </Button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
});
