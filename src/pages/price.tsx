import React, { memo } from 'react';
import MainLayout from '@components/layout';
import 'antd/dist/antd.less'; // 按需引入、设置主题
import PricePage from '@section/price/index';

export default memo(function Price() {
  return (
    <MainLayout>
      <PricePage />
    </MainLayout>
  );
});
