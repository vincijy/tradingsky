// 第三方
import React, { memo } from 'react';
// 功能
import LSAppHeader from '@components/header'; // 导航
import 'antd/dist/antd.less'; // 按需引入、设置主题
import Footer from '@components/footer';
import { LayoutStyle } from './style';
// 组件
export default memo(function MainLayout({ children }:{children:React.ReactElement }) {
  return (
    <LayoutStyle>
      <LSAppHeader/>
      {children}
      <Footer/>
    </LayoutStyle>
  );
});
