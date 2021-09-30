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
        <h2 className='head-text'>智能化的链上数据分析可视化平台</h2>
        <p className='small-text'>更智能, 更易于使用</p>
        <p className='desc'>精选 40+ 指标, 100+图表, 种类丰富, 分类详细</p>
        <p className='desc'>基于大数据分析技术高频采集链上数据</p>
        <p className='desc'>基于机器学习的智能数据批注, 提供人性化解读</p>
        <p className='desc'>多币种切换, 满足不同用户数据需求</p>
        <p className='desc'>易于理解的指标用法与解释</p>
        <p className='desc'>10000+ 用户, 区块链交易者、投资者、研究人员的理性选择</p>
        <p className='desc'>资深区块链研究人员,数据分析师,开发者为产品提供持续迭代</p>
      </div>
    </div>
  );
  useDynamicRender(content, 'catalog_root');
  return (
    <CatalogWrapper id='catalog_root' />
  );
});
