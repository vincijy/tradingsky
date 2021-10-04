// 第三方
import React, { memo } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LoadingWrapper } from './style'; // 样式
const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin />
);
export default memo(function RouteLoading() {
  return (
    <LoadingWrapper>
      <div className='route-loading-container'>
        <Spin
          indicator={antIcon}
          tip='加载中...'
          size='large'/>
      </div>
    </LoadingWrapper>
  );
});

