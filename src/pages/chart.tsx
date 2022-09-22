// 第三方
import React, { memo } from 'react';
// 功能
import MainLayout from '@components/layout';
import Studio from '@section/studio/index';
import 'antd/dist/antd.less'; // 按需引入、设置主题
import App from '../App';

// 组件
export default memo(function Index() {
  return (
    <MainLayout>
      <Studio />
    </MainLayout>
  );
});
