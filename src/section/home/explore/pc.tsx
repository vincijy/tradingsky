// 第三方
import React, { memo } from 'react';
import { useDynamicRender } from '@utils/dynamic';
import{ Button } from 'antd';
// 本地
import { ExploreWrapper } from './pc_style';

export default memo(function LSHomeExplore() {

  const content = (
    <div className='catalog-container'>
      <div className='catalog-text-area'>
        <h2 className='head-text'>探索</h2>
        <p>深入了解区块链产品，发现最新投资机会</p>
        <p>查看主力分布及项目分析，赋能价值投资</p>
        <Button className= 'explore-button' type='ghost'>
          <a href='https://www.lianshucha.com/discovery'>进入探索</a>
        </Button>
      </div>
      <div className='catalog-img-area' />

    </div>
  );
  useDynamicRender(content, 'explore_root');
  return (
    <ExploreWrapper id='explore_root' />
  );
});
