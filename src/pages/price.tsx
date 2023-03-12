// 第三方
import React, { memo } from 'react';
// 功能
import MainLayout from '@components/layout';
import PricePage from '@section/price/index';
import 'antd/dist/antd.less'; // 按需引入、设置主题

// 组件
export default memo(function Chart() {
  return (
    <MainLayout>
      <PricePage />
    </MainLayout>
  );
});
