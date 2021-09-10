// 第三方
import React, { memo, useState, useCallback } from 'react';

// 功能

// 组件
import LSAppFooter from '@/components/footer';
import { Layout } from 'antd';
import { ChartWrapper, ChartLeft, AppFooter } from './style';
import LSChartMenu from './menu'; // 菜单
import LSChartBar from './chart_bar'; // 功能栏
import LSChartBox from './chart_box'; // 图表框
import LSChartDescribe from './chart_describe';

export default memo(function LSChartPage() {
  // state/props
  const [isShow, setIsShow] = useState(true);

  // handle
  const { Content, Sider } = Layout;

  // handle function
  const changeShow = useCallback(
    () => {
      setIsShow(!isShow);
    },
    [isShow],
  );

  return (
    <ChartWrapper>
      <Layout>

        <ChartLeft>
          <Sider
            className='side'
            width={232}
            style={{ display: isShow ? 'block' : 'none' }}>
            <LSChartMenu />
          </Sider>
        </ChartLeft>


        <Layout className='site-layout' >
          <Content className='right-content-wrapper'>
            <div
              className='site-layout-background'>
              <LSChartBar changeShow={changeShow} />
              <LSChartBox />
              <LSChartDescribe />
            </div>
          </Content>
          <AppFooter>
            <LSAppFooter />
          </AppFooter>
        </Layout>
      </Layout>
    </ChartWrapper>
  );
});
