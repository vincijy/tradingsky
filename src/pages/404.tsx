import React, { memo } from 'react';
import MainLayout from '@components/layout';
import 'antd/dist/antd.less';

export default memo(function NotFound() {
  return (
    <MainLayout>
      <div>404</div>
    </MainLayout>
  );
});
