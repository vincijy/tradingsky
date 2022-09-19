// 第三方
import { memo } from 'react';
import { useDynamicRender } from '@/utils/dynamic';
// 本地
import { CatalogWrapper } from './pc_style';

export default memo(function LSHomeCatalog() {

  const content = (
    <div className='catalog-container'>
      <div className='catalog-img-area' />
      <div className='catalog-text-area'>
        <h2 className='head-text'>智能化的链上数据分析平台</h2>
        <p className='small-text'>更智能, 更易于使用</p>
        <p className='desc'>精选 40+ 指标, 100+图表, 种类丰富, 分类详细</p>
        <p className='desc'>基于机器学习标记链上地址标签2000万+</p>
        <p className='desc'>2000+ 付费用户, 区块链投资者、研究人员的理性选择</p>
        <p className='desc'>部署多个全节点，保证数据的稳定性和实时性</p>
        <p className='desc'>专业化的指标原理介绍，让您获取最前沿的数据解读</p>
        <p className='desc'>支持多币种切换, 满足用户的多元需求</p>
        <p className='desc'>资深区块链研究人员,数据科学家,开发者为产品提供持续迭代</p>
      </div>
    </div>
  );
  useDynamicRender(content, 'catalog_root');
  return (
    <CatalogWrapper id='catalog_root' />
  );
});
