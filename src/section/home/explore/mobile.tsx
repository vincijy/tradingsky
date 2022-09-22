// 第三方
import React, { memo } from 'react';
import { useDynamicRender } from '@utils/dynamic';

// 本地
import { ExploreWrapper } from './mobile_style';

export default memo(function LSHomeCatalog() {
  const content = (
    <div className='catalog-container'>
      <h2 className='head-text'>探索</h2>
      <div className= 'btn-area'>
        <a href='https://www.lianshucha.com/discovery' className='btn'>进入探索</a>
      </div>
      <div className='catalog-img-area' />
      <ul className='catalog-text-area'>
        <li>深入了解区块链产品，发现最新投资机会</li>
        <li>查看主力分布及项目分析，赋能价值投资</li>
      </ul>
    </div>
  );
  useDynamicRender(content, 'explore_root');
  return (
    <ExploreWrapper id='explore_root' />
  );
});
