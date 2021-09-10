import React, { memo } from 'react';

import { Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';

import { getHighCharts } from '@/components/chart';

import { BarWrapper } from './style';

// TODO: fix type
interface IState {
  changeShow:Function;
}
export default memo(function LSChartBar(props:IState) {
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
      <div className='bar'>
        <Button
          size='small'
          onClick={ () => changeIsShow() }>
          <MenuFoldOutlined />
        </Button>
        <Button
          size='small'
          onClick={ () => changeIsShow() }>
          <MenuFoldOutlined />收藏
        </Button>
      </div>
    </BarWrapper>
  );
});
