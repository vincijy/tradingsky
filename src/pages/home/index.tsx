// 第三方
import React, { memo } from 'react';
// 功能

// 组件
import LSAppFooter from '@/components/footer'; // 尾部

import LSHomeMain from './main'; // 主介绍
import LSHomeCatalog from './catalog'; // 指标列表
import LSHomeInsight from './insight'; // 洞见
import LSHomePirate from './pirate'; // 成为海盗

import { HomePageWrapper } from './style';

export default memo(function LSHomePage() {
  return (
    <HomePageWrapper>
      <LSHomeMain />
      <LSHomeCatalog/>
      <LSAppFooter/>
    </HomePageWrapper>
  );
});



// <LSHomeCatalog/>
// <LSHomeInsight/>
// <LSHomePirate/>
// <LSAppFooter/>