import RegisterButton from '@/components/register_btn';
import { Provider } from 'react-redux'; // 集中管理状态
import store from '@/store';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { memo } from 'react';
import LSChartToolbox from '../chart_toolbox';
import LSChartHead from '../char_head';
import { ChartLoadingWrapper } from './style';
import LSChartCover from '.';


export default memo(function NoData() {
  return (
    <ChartLoadingWrapper id='chart-loading'>
       当前币种无该指标数据&nbsp;
      <InfoCircleOutlined />
    </ChartLoadingWrapper>
  );
});
