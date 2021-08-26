// 第三方
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux的hook

import { Card } from 'antd';

// 本地
import { SubMenuItem } from '@/config/def';
import { DescribeWrapper } from './style';

export default memo(function LSChartDescribe() {

  // 选中的菜单
  const selectedSubMenu = useSelector((state) => (state as any).getIn(['uiData', 'selectedSubMenu']));
  const { args: { index, asset },
    introduce,
    assetList,
  } = selectedSubMenu as SubMenuItem;

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
