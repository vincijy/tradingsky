// 第三方
import React, { memo, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom'; // 路由相关文件
import { renderRoutes } from 'react-router-config'; // 路由集中配置
import { Provider } from 'react-redux'; // 集中管理状态
// 功能
import routes from '@router'; // 本地路由
import store from '@store';
import 'antd/dist/antd.less'; // 按需引入、设置主题
import RouteLoading from '@components/route_loading';
import Wrapper from '@components/wrapper';
import LSAppHeader from '@components/header'; // 导航
import Studio from '@jsx/studio';
import { FontStyle } from '../style';

// 组件
export default memo(function App() {
  return (
    <Provider store={store}>
      <FontStyle />
      <div id='authing_root' />
      <LSAppHeader/>
      <Studio></Studio>
      {/* <BrowserRouter>
        <LSAppHeader/>
        <Wrapper/>
        <Suspense fallback={<RouteLoading/>}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter> */}
    </Provider>
  );
});
