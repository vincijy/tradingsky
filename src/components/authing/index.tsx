// 第三方
import { memo, useLayoutEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { useHistory } from 'react-router';

import { AuthingGuard, GuardScenes } from '@authing/react-ui-components'; // 登录框
import '@authing/react-ui-components/lib/index.min.css';

import { changeAuthingPanel } from '@/store/ui/action';

import { getUserRole, makeUserRole, getUserColletion } from '@/api/user';
import * as UA from '@/store/user/action'; // 改变登录状态
import { IUserInfo } from '@/store/user/def';
import { authingConfig, authingComponentConfig } from '@/config';


export default memo(function AuthingPanel() {
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
  const onLogin = (userInfo:IUserInfo) => { // 成功登录
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
        // const v = JSON.stringify(userInfo);
        // localStorage.setItem('userInfo', v);
        // 获取用户收藏的指标
        // eslint-disable-next-line promise/no-nesting
        getUserColletion()
          .then((res) => {
            userInfo.collection = JSON.parse(res.data.value) || { subMenus: [] };
            const v = JSON.stringify(userInfo);
            localStorage.setItem('userInfo', v);
            navigateToChartPage();
            window.location.reload();
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const navigateToChartPage = () => {
    history.push('/chart');
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
    if (config.defaultScenes === GuardScenes.Register) {
      const el = document.querySelector('.authing-guard-to-register-btn');
      el && (el as HTMLElement).click();
    } else {
      const el = document.querySelector('.authing-guard-to-login-btn');
      el && (el as HTMLElement).click();
    }
  });

  return (
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
  );
});
