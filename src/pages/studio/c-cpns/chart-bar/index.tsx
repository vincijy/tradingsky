import React, { memo } from 'react';

import { Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';

import { getHighCharts } from '@/components/chart';

import { BarWrapper } from './style';

// TODO: fix type
export default memo(function LSChartBar(props:any) {
  // state/props

  // handle
  const { changeShow } = props;

  // handle function
  const changeIsShow = () => {
    changeShow();
    setTimeout(() => { // 图表容器自适应
      getHighCharts().charts.forEach((chart) => {
        chart && chart.reflow();
      });
    }, 0);
  };

  return (
    <BarWrapper>
      <div>
        <Button onClick={ () => changeIsShow() }><MenuFoldOutlined /></Button>
      </div>
    </BarWrapper>
  );
});
