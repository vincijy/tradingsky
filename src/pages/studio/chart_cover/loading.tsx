import { memo } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ChartLoadingWrapper } from './style';

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin />
);

export default memo(function Loading() {
  return (
    <ChartLoadingWrapper id='chart-loading'>
      <Spin
        indicator={antIcon}
        tip='加载中...'
        size='large'/>
    </ChartLoadingWrapper>
  );
});
