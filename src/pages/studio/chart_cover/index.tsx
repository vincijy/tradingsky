// 第三方
import React, { memo, useState } from 'react';
import { useAppSelector } from '@/hooks';
import { CoverWrapper } from './style';
import Loading from './loading';
import Empty from './empty';
import VipRequired from './vip_required';
import LoginRegisterRequired from './login_register';

export default memo(function LSChartCover() {
  const [width, setWidth] = useState(100);

  // 渲染完成后, 动态设置宽度为图表的宽度
  setTimeout(() => {
    const el = document.querySelector('.site-layout-background');
    if (!el) {
      return;
    }
    const { width: w } = el.getBoundingClientRect();
    setWidth(w);
  }, 0);

  return (
    <CoverWrapper style={{ width: `${width}px` }}>
      <div className='content'>
        TODO: 把无数据组件,loading组件放这里, 请求登录组件放这里
      </div>
    </CoverWrapper>
  );
});
