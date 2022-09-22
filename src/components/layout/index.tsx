// 第三方
import React, { memo, ReactElement } from 'react';
// 功能
import LSAppHeader from '@components/header'; // 导航
import 'antd/dist/antd.less'; // 按需引入、设置主题

// 组件
export default memo(function MainLayout({ children }:{children:React.ReactElement }) {
  return (
    <div>
      <LSAppHeader/>
      {children}
    </div>
  );
});
