import { memo, useEffect, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import { Spin } from 'antd';

import { useAppSelector, useAppDispatch } from '@/hooks';

import LSChartDoubleLine from '@/components/chart/line';
import { getChart, getHighCharts } from '@/components/chart';
import { getChartData, getAssetPrice } from '@/api/chart';

import { LoadingOutlined } from '@ant-design/icons';
import { setBtcPriceData } from '@/store/chart/action';
import { TypeDataRow } from '@/components/chart/def';
import LoginButton from '@/components/login_btn';
import RegisterButton from '@/components/register_btn';
import { Provider } from 'react-redux'; // 集中管理状态
import store from '@/store';
import LSChartToolbox from '../chart_toolbox';
import LSChartHead from '../char_head';
import LSChartCover from '../chart_cover';
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
