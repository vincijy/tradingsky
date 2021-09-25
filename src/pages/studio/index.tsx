// 第三方
import React, { memo, useState, useCallback } from 'react';

// 功能

// 组件
import LSAppFooter from '@/components/footer';
import { Layout } from 'antd';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { toggleMenuVisible } from '@/store/ui/action';
import { isMobile } from '@/utils/is';
import { ChartWrapper, ChartLeft, AppFooter, SiteModal } from './style';
import LSChartMenu from './menu'; // 菜单
import LSChartBar from './chart_bar'; // 功能栏
import LSChartBox from './chart_box'; // 图表框
import LSChartDescribe from './chart_describe';
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

  return (
    <ChartWrapper>
      <Layout>

        <ChartLeft>
          <Sider
            className='side'
            width={280}
            style={{ display: menuVisible ? 'block' : 'none' }}>
            <LSChartMenu />
          </Sider>
        </ChartLeft>

        {
          !(isMobile() && menuVisible) &&
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
          isMobile() && menuVisible &&
            <SiteModal onClick={toggleMenu}/>
        }
      </Layout>
    </ChartWrapper>
  );
});
