// 第三方
import React, { memo } from 'react';

// 功能

// 组件
import LSCatalog from '@components/catalog'; // 目录
import LSAppFooter from '@components/footer'; // 尾部
import { CatalogWrapper, CatalogTop, CatalogBottom } from './style';

export default memo(function LSCatalogPage() {
  return (
    <div>
      <CatalogWrapper>
        <CatalogTop>
          <h2 >指标目录</h2>
          <p>
                        微博
            <a
              href='https://weibo.com/u/7657665166?is_all=1'
              rel='noreferrer'
              target='_blank'>QKLData
            </a>
                        会日常更新指标数据的用法，也可以通过
            <a
              href='https://weibo.com/p/1005057657665166/wenzhang?from=page_100505_profile&wvr=6&mod=wenzhangmore&articlefeed=1&is_article=1'
              rel='noreferrer'
              target='_blank'>指标介绍专栏
            </a>
                        了解指标的原理
          </p>
        </CatalogTop>
        <CatalogBottom>
          <LSCatalog />
        </CatalogBottom>
      </CatalogWrapper>
      <LSAppFooter />
    </div>
  );
});
