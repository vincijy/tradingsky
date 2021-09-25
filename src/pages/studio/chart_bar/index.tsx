import React, { memo } from 'react';

import { Button } from 'antd';
import { MenuFoldOutlined, HeartOutlined } from '@ant-design/icons';

import { getHighCharts } from '@/components/chart';

import { toggleMenuVisible } from '@/store/ui/action';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { BarWrapper } from './style';

export default memo(function LSChartBar() {
// handle function
  const dispatch = useAppDispatch();
  const menuVisible = useAppSelector((state) => state.ui.menuVisible);

  const reflowChart = () => {
    setTimeout(() => { // 图表容器自适应
      getHighCharts().charts.forEach((chart) => {
        chart && chart.reflow();
      });
    }, 0);
  };

  const toggleMenu = () => {
    dispatch(toggleMenuVisible({
      menuVisible: !menuVisible,
    }));
    reflowChart();
  };


  return (
    <BarWrapper>
      <div className='bar'>
        <Button
          size='small'
          onClick={ () => toggleMenu() }>
          <MenuFoldOutlined />
        </Button>
        <Button
          size='small'
        >
          <HeartOutlined />收藏
        </Button>
      </div>
    </BarWrapper>
  );
});
