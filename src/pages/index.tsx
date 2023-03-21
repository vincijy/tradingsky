// 第三方
import React, { memo } from 'react';
// 功能
import PlainLayout from '@components/layout/plainLayout';
import 'antd/dist/antd.less'; // 按需引入、设置主题
import Main from '@section/home/main/pc';
// 组件
export default memo(function Index() {
  return (
    <PlainLayout>
      <Main />
    </PlainLayout>
  );
});
