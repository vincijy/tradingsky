// 第三方
import React, { memo } from 'react';
import { useAppSelector } from '@/hooks';
import { Card } from 'antd';

import { DescribeWrapper } from './style';

export default memo(function LSChartDescribe() {

  // 选中的菜单
  const { subMenu: selectedSubMenu } = useAppSelector((state) => state.uiData.currentMenu);
  const { args: { index, asset },
    introduce,
    assetList,
  } = selectedSubMenu;

  return (
    <DescribeWrapper>
      <div className='content-describe'>
        <Card
          title='指标介绍'
          className='bord-describe'>
          { introduce.text }
          {
            introduce.isURL ? <a href={introduce.weiboURL} target='_blank' rel='noreferrer' className='weibo-url' >详细原理见此文章</a> : ''
          }
          <p className='title' >更新币种：</p>
          <p className='content' >{assetList}</p>
        </Card>
      </div>
    </DescribeWrapper>
  );
});
