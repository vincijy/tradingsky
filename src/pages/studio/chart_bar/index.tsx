import React, { memo, useEffect, useState } from 'react';

import { Button } from 'antd';
import { MenuFoldOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getHighCharts } from '@/components/chart';

import { toggleMenuVisible } from '@/store/ui/action';
import { updateLayout } from '@/store/ui/action';
import { updateUserInfo } from '@/store/user/action';
import { setUserCollection } from '@/api/user';
import { IUserInfo } from '@/store/user/def';
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

  const [hasCollected, setHasCollected] = useState((false));
  const collect = async() => {
    setHasCollected(true);
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

    const keys = userInfo.collection.keyPaths.map((item) => item.subMenuKey);
    if (!keys.includes(selectedSubMenu.key)) {
      userInfo.collection.keyPaths.push({
        menuKey: selectedMenu.key,
        subMenuKey: selectedSubMenu.key,
      });
    }
    await store(userInfo);
  };

  /**
   * 存储在本地缓存 & redux, 服务端
   * @param userInfo 用户信息
   */
  const store = async(userInfo:IUserInfo) => {
    dispatch(updateUserInfo({
      userInfo,
    }));
    await setUserCollection({
      collection: JSON.stringify(userInfo.collection),
    });
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const deCollect = async() => {
    setHasCollected(false);
    if (!userInfo || !userInfo.collection) {
      return;
    }
    const keys = userInfo.collection.keyPaths.map((item) => item.subMenuKey);
    if (!keys.includes(selectedSubMenu.key)) {
      return;
    }
    const keyPaths = userInfo.collection.keyPaths;
    userInfo.collection.keyPaths = keyPaths.filter((item) => item.subMenuKey === selectedSubMenu.key);
    await store(userInfo);
  };

  useEffect(() => {
    if (userInfo.collection) {
      const keyPaths = userInfo.collection.keyPaths;
      for (const kp of keyPaths) {
        if (kp.subMenuKey === selectedSubMenu.key) {
          setHasCollected(true);
          return;
        }
      }
      setHasCollected(false);
    }
  }, [userInfo, selectedSubMenu]);

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
          onClick={ hasCollected ? deCollect : collect }
        >
          {
            hasCollected ?
              <HeartFilled style={{ color: 'red' } }/> :
              <HeartOutlined />
          }
          {
            hasCollected ?
              '收藏' :
              '收藏'
          }
        </Button>
      </div>
    </BarWrapper>
  );
});
