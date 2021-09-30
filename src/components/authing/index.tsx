// 第三方
import ReactDOM from 'react-dom';
import React, { memo, useLayoutEffect, lazy, Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { useHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '@/store';
const AuthingGuard = React.lazy(():any => import('./authing'));
import '@authing/react-ui-components/lib/index.min.css';

import { changeAuthingPanel } from '@/store/ui/action';

import { getUserRole, makeUserRole, getUserColletion, getUserVipdate } from '@/api/user';
import * as UA from '@/store/user/action'; // 改变登录状态
import { IUserInfo } from '@/store/user/def';
import { authingConfig, authingComponentConfig } from '@/config';

const AuthingPanel = memo(function AuthingPanel() {
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => ({
    ...authingComponentConfig,
    defaultScenes: state.ui.authingPanel.view,
  }));

  const authingPanel = useAppSelector((state) => state.ui.authingPanel);

  const onCloseModal = () => {
    document.addEventListener('click', (e) => {
      e.composedPath().forEach((el:EventTarget) => {
        if (!(el instanceof Element)) {
          return;
        }
        if (el.classList && el.classList.contains('authing-guard-mask')) {
          close();
        }
      });
    });
  };

  const history = useHistory();
  const isLogin = useAppSelector((state) => state.user.isLogin);

  const onLogin = async(userInfo:IUserInfo) => { // 成功登录
    dispatch(UA.toggleLogin({
      isLogin: true,
    }));
    dispatch(UA.updateUserInfo({
      userInfo,
    }));

    const { data: role } = await getUserRole();
    // Authing存储的字段
    const { data: words } = await getUserColletion();
    const collctionWord = words.find((w) => w.key === 'collection');
    const { data: vipDate } = await getUserVipdate();
    userInfo.vipDate = vipDate;
    // eslint-disable-next-line require-atomic-updates
    userInfo.role = role;
    if (collctionWord) {
      // eslint-disable-next-line require-atomic-updates
      userInfo.collection = JSON.parse(collctionWord.value) || { keypaths: [] };
    }

    const v = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', v);

    navigateToChartPage();
    window.location.reload();
  };

  const navigateToChartPage = () => {
    history && history.push('/chart');
  };

  const onRegister = (userInfo:IUserInfo) => { // 成功注册
    dispatch(UA.updateUserInfo({
      userInfo,
    })); // 把注册用户信息存入redux
    makeUserRole() // 添加level1角色
      .then((res) => {
        userInfo.role = res.data;
        const v = JSON.stringify(userInfo);
        localStorage.setItem('userInfo', v);
        dispatch(UA.updateUserInfo({
          userInfo,
        })); // 把注册用户信息存入redux
        navigateToChartPage();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const close = () => {
    dispatch(changeAuthingPanel({
      authingPanel: {
        visible: false,
        view: authingPanel.view,
      },
    }));
  };

  useLayoutEffect(() => {
    // authing 有毛病, 先通过这样模拟点击
    if (config.defaultScenes === 'register') {
      const el = document.querySelector('.authing-guard-to-register-btn');
      el && (el as HTMLElement).click();
    } else {
      const el = document.querySelector('.authing-guard-to-login-btn');
      el && (el as HTMLElement).click();
    }
  });

  return (
    <Suspense fallback={<div style={{ 'width': '20px', 'height': '20px', 'border': '1px solid red' }}/>}>
      <AuthingGuard
        appId={authingConfig.appId}
        config={config}
        visible={isLogin ? false : authingPanel.visible } //
        onClose={close}
        onLoad={() => { // 加载中
          onCloseModal();
        }}
        onLogin={onLogin}
        onRegister={onRegister}
        onRegisterInfoCompleted={() => { // 成功补充注册信息
          window.location.reload(); // 提交后刷新页面
        }}
        onLoginError={() => {
          console.error('提示：出现错误');
        }}
      />
    </Suspense>
  );
});

export function injectAuthingPanel() {
  const el = document.querySelector('#authing_root');
  el && ReactDOM.render(
      <Suspense fallback={<span/>}>
        <Provider store={store}>
          <AuthingPanel/>
        </Provider>
      </Suspense> as any, el);
}

