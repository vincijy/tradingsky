// 第三方
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

// 组件
import { Button } from 'antd';

// 本地
import { CatalogWrapper, CatalogBottom } from './style';

export default memo(function LSHomeCatalog() {

  // other hook
  const history = useHistory();

  // handle function
  const goCatalog = () => {
    history.push('/catalog');
  };

  return (
    <CatalogWrapper>
      <div className='content'>
        <div className='container'>
          <h2>链数查致力于使用数据科学</h2>
          <h2>为您提供专业的链上数据服务</h2>
          <h2>图表种类丰富，分类详细，满足您作为交易者、投资者、研究人员的各种需求</h2>

          <CatalogBottom>
            <div>
              <p>100+</p>
              <p>数据图表</p>
            </div>
            <div>
              <p>10000+</p>
              <p>用户群体</p>
            </div>
          </CatalogBottom>
          <Button
            type='primary'
            onClick={() => goCatalog()} >查看指标列表
          </Button>
        </div>
      </div>
    </CatalogWrapper>
  );
});
