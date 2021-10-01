// 第三方
import React, { memo, Suspense } from 'react';
// 功能

// 组件
import LSAppFooter from '@/components/footer'; // 尾部

import { isMobile, isPad } from '@/utils/is';
import LSHomeMainPC from './main/pc'; // 主介绍
import LSHomeMainMobile from './main/mobile'; // 主介绍
import LSHomeMainPad from './main/pad';
import { HomePageWrapper } from './style';


let HomeMain:React.NamedExoticComponent;
let LSHomeCatalog:any;

if (isMobile()) {
  HomeMain = LSHomeMainMobile;
  LSHomeCatalog = React.lazy(() => import('./catalog/mobile'));
} else if(isPad()) {
  HomeMain = LSHomeMainPad;
  LSHomeCatalog = React.lazy(() => import('./catalog/mobile'));
} else {
  HomeMain = LSHomeMainPC;
  LSHomeCatalog = React.lazy(() => import('./catalog/pc'));
}

export default memo(function LSHomePage() {
  return (
    <HomePageWrapper>
      <HomeMain/>
      <Suspense fallback='<span></span>'>
        <LSHomeCatalog/>
      </Suspense>
      <LSAppFooter/>
    </HomePageWrapper>
  );
});
(window as any).isMobile = isMobile;