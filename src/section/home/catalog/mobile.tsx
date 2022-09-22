// 第三方
import React, { memo } from 'react';
import { useDynamicRender } from '@utils/dynamic';
// 本地
import { CatalogWrapper } from './mobile_style';

export default memo(function LSHomeCatalog() {
  const content = (
    <div className='catalog-container'>
      <h2 className='head-text'>智能化的链上数据分析平台</h2>
      <div className='catalog-img-area' />
      <ul className='catalog-text-area'>
        <li className='small-text'>更智能, 更易于使用</li>
        <li className='desc'>精选 40+ 指标, 100+图表, 种类丰富, 分类详细</li>
        <li className='desc'>基于机器学习标记链上地址标签2000万+</li>
        <li className='desc'>2000+ 付费用户, 区块链投资者、研究人员的理性选择</li>
        <li className='desc'>部署多个全节点，保证数据的稳定性和实时性</li>
        <li className='desc'>专业化的指标原理介绍，让您获取最前沿的数据解读</li>
        <li className='desc'>支持多币种切换, 满足用户的多元需求</li>
        <li className='desc'>资深区块链研究人员,数据科学家,开发者为产品提供持续迭代</li>
      </ul>
    </div>
  );
  useDynamicRender(content, 'catalog_root');
  return (
    <CatalogWrapper id='catalog_root' />
  );
});
