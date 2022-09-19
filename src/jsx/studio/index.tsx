// 第三方
import React, { memo, useState, useCallback, useEffect } from 'react';

// 功能

// 组件
import LSAppFooter from '@components/footer';
import { Layout } from 'antd';
import { useAppSelector, useAppDispatch } from '@hooks';
import { toggleMenuVisible } from '@store/ui/action';
import { isMobile, isPad } from '@utils/is';
import { getAuthingClient } from '@utils/authing';
import { toggleLogin } from '@store/user/action';
import { ChartWrapper, ChartLeft, AppFooter, SiteModal } from './style';
import LSChartMenu from './menu'; // 菜单
import LSChartBar from './chart_bar'; // 功能栏
import LSChartBox from './chart_box'; // 图表框
import LSChartDescribe from './chart_describe';

let isLoginedChecked = false;
export default memo(function LSChartPage() {

  // 移动端适配, 在移动端, 初始化的时候不显示左侧菜单

  // handle
  const { Content, Sider } = Layout;
  const dispatch = useAppDispatch();
  const menuVisible = useAppSelector((state) => state.ui.menuVisible);

  // handle function
  const toggleMenu = () => (
    dispatch(toggleMenuVisible({
      menuVisible: !menuVisible,
    }))
  );

  const logout = () => { // 退出登录
    getAuthingClient().logout();
    dispatch(toggleLogin({
      isLogin: false,
    }));
    localStorage.removeItem('userInfo');
  };
  const tokenExpiredAt = useAppSelector((state) => state.user.userInfo.tokenExpiredAt);
  const token = useAppSelector((state) => state.user.userInfo.token);

  useEffect(() => {
    if (!tokenExpiredAt || !token) {
      return;
    }
    if (new Date(tokenExpiredAt) < new Date()) {
      logout();
      return;
    }
    if (isLoginedChecked) {
      return;
    }
    getAuthingClient().checkLoginStatus(token).then((res) => {
      isLoginedChecked = true;
      const { status } = res;
      if ((status !== true)) {
        logout();
        return;
      }
    }).catch((error) => {
      console.error(error);
    });
  });

  // 选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const { introduce } = selectedSubMenu;

  return (
    <ChartWrapper>
      <Layout>

        <ChartLeft height={introduce.height}>
          {
            isMobile() &&
            <Sider
              className='side'
              width={280}
              style={{ display: menuVisible ? 'block' : 'none' }}>
              <LSChartMenu />
            </Sider>
          }
          {
            !isMobile() &&
            <Sider
              className='side'
              width={ menuVisible ? 274 : 70 }
              style={{ display: menuVisible ? 'block' : 'block' }}>
              <LSChartMenu />
            </Sider>
          }
        </ChartLeft>
        {
          !((isMobile() || isPad()) && menuVisible) &&
          <Layout className='site-layout' >
            <Content className='right-content-wrapper'>
              <div
                className='site-layout-background'>
                <LSChartBar />
                <LSChartBox />
                <LSChartDescribe />
              </div>
            </Content>
            <AppFooter>
              <LSAppFooter />
            </AppFooter>
          </Layout>
        }

        {
          // 手机或者PAD的情况下, 如果菜单可见, 弹一层遮障
          (isMobile() || isPad()) && menuVisible &&
            <SiteModal onClick={toggleMenu}/>
        }
      </Layout>
    </ChartWrapper>
  );
});
