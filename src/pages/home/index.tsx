// 第三方
import React, { memo, Suspense } from 'react';
// 功能

// 组件
import LSAppFooter from '@/components/footer'; // 尾部

import { isMobile } from '@/utils/is';
import LSHomeMainPC from './main/pc'; // 主介绍
import LSHomeMainMobile from './main/mobile'; // 主介绍

import { HomePageWrapper } from './style';

const LSHomeCatalog = isMobile() ?
  React.lazy(() => import('./catalog/mobile')) :
  React.lazy(() => import('./catalog/pc'));

export default memo(function LSHomePage() {
  return (
    <HomePageWrapper>
      { isMobile() ? <LSHomeMainMobile/> : <LSHomeMainPC /> }
      <Suspense fallback='<span></span>'>
        <LSHomeCatalog/>
      </Suspense>
      <LSAppFooter/>
    </HomePageWrapper>
  );
});
