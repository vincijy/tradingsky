// 第三方
import React, { memo, Suspense } from 'react';
// 功能

// 组件
import LSAppFooter from '@components/footer'; // 尾部

import { isMobile, isPad } from '@utils/is';
import LSHomeMainPC from './main/pc'; // 主介绍
import LSHomeMainMobile from './main/mobile'; // 主介绍
import LSHomeMainPad from './main/pad';
import { HomePageWrapper } from './style';


let HomeMain:React.NamedExoticComponent;
let LSHomeCatalog:any;
let HomeExplore:any;
let HomeDiscord:any;
let HomeDeclare:any;



if (isMobile()) {
  HomeMain = LSHomeMainMobile;
  LSHomeCatalog = React.lazy(() => import('./catalog/mobile'));
  HomeExplore = React.lazy(() => import('./explore/mobile'));
  HomeDiscord = React.lazy(() => import('./discord/mobile'));
  HomeDeclare = React.lazy(() => import('./declare/mobile'));


} else if(isPad()) {
  HomeMain = LSHomeMainPad;
  LSHomeCatalog = React.lazy(() => import('./catalog/mobile'));
  HomeExplore = React.lazy(() => import('./explore/mobile'));
  HomeDiscord = React.lazy(() => import('./discord/mobile'));
  HomeDeclare = React.lazy(() => import('./declare/mobile'));

} else {
  HomeMain = LSHomeMainPC;
  LSHomeCatalog = React.lazy(() => import('./catalog/pc'));
  HomeExplore = React.lazy(() => import('./explore/pc'));
  HomeDiscord = React.lazy(() => import('./discord/pc'));
  HomeDeclare = React.lazy(() => import('./declare/pc'));




}

export default memo(function LSHomePage() {
  return (
    <HomePageWrapper>
      <HomeMain/>
      <Suspense fallback='<span></span>'>
        <HomeExplore/>
      </Suspense>
      <Suspense fallback='<span></span>'>
        <LSHomeCatalog/>
      </Suspense>
      <Suspense fallback='<span></span>'>
        <HomeDiscord/>
      </Suspense>
      <Suspense fallback='<span></span>'>
        <HomeDeclare/>
      </Suspense>
      <LSAppFooter/>
    </HomePageWrapper>
  );
});
