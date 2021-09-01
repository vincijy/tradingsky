// 第三方
import React, { memo } from 'react';
// 功能

// 组件
import LSAppFooter from '@/components/app-footer'; // 尾部

import LSHomeMain from './c-cpns/main'; // 主介绍
import LSHomeCatalog from './c-cpns/catalog'; // 指标列表
import LSHomeInsight from './c-cpns/insight'; // 洞见
import LSHomePirate from './c-cpns/pirate'; // 成为海盗

import { HomePageWrapper } from './style';

export default memo(function LSHomePage() {
  return (
    <HomePageWrapper>
      <LSHomeMain />
      <LSHomeCatalog/>
      <LSHomeInsight/>
      <LSHomePirate/>
      <LSAppFooter/>
    </HomePageWrapper>
  );
});
