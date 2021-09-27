// 第三方
import React, { memo, useState } from 'react';
import { useAppSelector } from '@/hooks';
import { useAppDispatch } from '@/hooks';
import { updateLayout } from '@/store/ui/action';
import { CoverWrapper } from './style';
import Loading from './loading';
import NoData from './no_data';
import VipRequired from './vip_required';
import LoginRegisterRequired from './login_register';

interface IProps {
  loadingVisible?:boolean;
  loginVisible?:boolean;
  loginRegisterRequiredVisible?:boolean;
  vipRequiredVisible?:boolean;
  coverImgVisible?:boolean;
  noDataVisible?:boolean;
}
export default memo(function LSChartCover(props:IProps = {
  loginVisible: false,
  loginRegisterRequiredVisible: false,
  vipRequiredVisible: false,
  loadingVisible: false,
  coverImgVisible: true,
  noDataVisible: false,
}) {
  const dispatch = useAppDispatch();
  const width = useAppSelector((state) => state.ui.layout.chartBoxWidth);
  // 渲染完成后, 动态设置宽度为图表的宽度
  setTimeout(() => {
    const el = document.querySelector('.site-layout-background');
    if (!el) {
      return;
    }
    const { width: w } = el.getBoundingClientRect();
    dispatch(updateLayout({
      layout: {
        chartBoxWidth: w - 3,
      },
    }));
  }, 0);

  const { loadingVisible, loginRegisterRequiredVisible, vipRequiredVisible, coverImgVisible, noDataVisible } = props;

  return (
    <CoverWrapper style={{ width: `${width}px` }}>
      <div className={`content ${coverImgVisible ? 'highchart-cover' : ''}`}>
        {
          loadingVisible && <Loading />
        }
        {
          loginRegisterRequiredVisible && <LoginRegisterRequired />
        }
        {
          vipRequiredVisible && <VipRequired />
        }
        {
          noDataVisible && <NoData/>
        }
      </div>
    </CoverWrapper>
  );
});
