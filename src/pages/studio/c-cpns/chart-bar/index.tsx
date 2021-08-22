import React, { memo } from 'react';
import { Button } from 'antd';

import { BarWrapper } from './style';

// TODO: fix type
export default memo(function LSChartBar(props:any) {
  // state/props

  // handle
  const { changeShow } = props;

  // handle function
  const changeIsShow = () => {
    changeShow();
  };

  return (
    <BarWrapper>
      <div>
        <Button onClick={ () => changeIsShow() }>收起菜单栏</Button>
      </div>
    </BarWrapper>
  );
});
