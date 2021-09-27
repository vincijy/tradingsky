import React, { memo } from 'react';

import { Button } from 'antd';
import { MenuFoldOutlined, HeartOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@/hooks';

import { menus } from '@/indices'; // 分类数据
import { getHighCharts } from '@/components/chart';

import { toggleMenuVisible } from '@/store/ui/action';
import { updateLayout } from '@/store/ui/action';
import { updateUserInfo } from '@/store/user/action';
import { setUserCollection } from '@/api/user';
import { BarWrapper } from './style';

export default memo(function LSChartBar() {
// handle function
  const dispatch = useAppDispatch();
  const menuVisible = useAppSelector((state) => state.ui.menuVisible);

  // 渲染完成后, 动态设置宽度为图表的宽度
  const updateWidth = () => {
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
  };


  const { menu: selectedMenu, subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const reflowChart = () => {
    setTimeout(() => { // 图表容器自适应
      getHighCharts().charts.forEach((chart) => {
        chart && chart.reflow();
      });
      updateWidth();
    }, 0);
  };

  const toggleMenu = () => {
    dispatch(toggleMenuVisible({
      menuVisible: !menuVisible,
    }));
    reflowChart();
  };

  const collect = () => {
    if (!userInfo.collection) {
      userInfo.collection = {
        keyPaths: [
          {
            menuKey: selectedMenu.key,
            subMenuKey: selectedSubMenu.key,
          },
        ],
      };
    }
    if (!userInfo.collection.keyPaths.map((item) => item.subMenuKey).includes(selectedSubMenu.key)) {
      userInfo.collection.keyPaths.push({
        menuKey: selectedMenu.key,
        subMenuKey: selectedSubMenu.key,
      });
    }
    dispatch(updateUserInfo({
      userInfo,
    }));

    const params = {
      collection: JSON.stringify(userInfo.collection),
    };

    setUserCollection(params).then(() => {
      console.log('setUserCollect, done');
    }).catch(() => {
      console.error('error');
    });
  };


  return (
    <BarWrapper>
      <div className='bar'>
        <Button
          size='small'
          onClick={ () => toggleMenu() }>
          <MenuFoldOutlined />
        </Button>
        <Button
          size='small'
          onClick={ collect }
        >
          <HeartOutlined />收藏
        </Button>
      </div>
    </BarWrapper>
  );
});
