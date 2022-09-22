// 第三方
import React, { memo, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';
import { getAnnotationManager } from '@utils/annotation';
import { privateDefaultOptions } from '@indices/chart_private_default';
// 功能
import { menus as indiceMenus } from '@indices'; // 分类数据
import { toggleAnnotation } from '@store/chart/action';

// 组件
import { Menu } from 'antd';

import { filter, includes, updateWith } from 'lodash';
import { updateChartOption } from '@store/chart/action';
import { commonOptions } from '@indices/chart_common';

import { mergeOption } from '@utils/merge_option';
import { isMobile, isPad } from '@utils/is';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { getChart } from '@components/chart';
import { changeMenu, toggleChartRecreated, toggleMenuVisible, updateLayout } from '../../../store/ui/action';
import { MenuWrapper, MenuWrapperPC } from './style';
import CollectionMenus from './collection_menus';
import AssetSelector from './asset_selector';

export default memo(function LSChartMenu() {
  const dispatch = useAppDispatch();
  const { menu: selectedMenu, subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);

  const [menus] = useState(indiceMenus);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const [selctedKey, setSelctedKey] = useState('活跃地址量');
  /**
   * 根据菜单的路径更新redux
   * @param e 读取菜单的路径
   * @returns void
   */
  const onSelect = (e:{keyPath:string[]}) => {
    // toggleMenu();
    const { keyPath } = e;
    const [subMenuKey, menuKey] = keyPath;
    setSelctedKey(subMenuKey);
    const selectedMenuItem = menus.find((item) => item.key === menuKey);

    if (!selectedMenuItem) {
      console.error('selectedMenuItem not found');
      return;
    }

    const s = selectedMenuItem.subMenus.find((item) => item.key === subMenuKey);

    if (!s) {
      console.error('Not found selectedSubMenuItem');
      return;
    }
    dispatch(changeMenu({
      currentMenu: {
        menu: selectedMenuItem,
        subMenu: s,
      },
      asset,
    }));
    dispatch(toggleAnnotation({
      annotationVisible: false,
    }));

    // 允许重建chart
    dispatch(toggleChartRecreated({
      chartRecreated: true,
    }));

    // 根据菜单修改自定义图表配置
    if (s.chart) {
      // 合并通用配置与当前菜单当前对应币种的图表配置
      dispatch(updateChartOption({
        options: mergeOption(commonOptions, s.chart[asset]),
      }));
    } else {
      dispatch(updateChartOption({
        options: mergeOption(commonOptions, privateDefaultOptions),
      }));
    }

    const ano = getAnnotationManager();
    ano && ano.clearAnnotationCircle();

    (isMobile() || isPad()) && dispatch(toggleMenuVisible({
      menuVisible: false,
    }));
  };

  const [openKeys, setOpenKeys] = React.useState([selectedMenu.key]);

  const onOpenChange = (keys:React.Key[]) => {
    const newOpenKeys = filter(keys, (k) => !includes(openKeys, k));
    setOpenKeys(newOpenKeys as string[]);
  };

  const selectCallback = () => {
    // TODO:
    setOpenKeys([]);
  };

  const exceptFirst = menus.slice(1);

  const Mobile = (
    <MenuWrapper>
      <AssetSelector />
      <CollectionMenus
        selectCallback={ selectCallback }
        onOpenChangeCallback={selectCallback}/>
      <Menu
        mode='inline'
        defaultOpenKeys={[]}
        onSelect={ onSelect }
        selectedKeys={[selectedMenu.key, selectedSubMenu.key]}
        openKeys={openKeys} // 一级菜单展开项
        onOpenChange={onOpenChange} // 监听打开的
      >
        {
          exceptFirst.filter((Item) => Item.assetList.indexOf(`${asset}`) > -1).map((menuItem) => (
            <Menu.SubMenu
              key={`${menuItem.key}`}
              icon={menuItem.icon}
              title={menuItem.name}>
              {
                menuItem.subMenus.filter((Item) => Item.assetList.indexOf(`${asset}`) > -1).map((subMenuItem) => (
                  <Menu.Item
                    key={subMenuItem.key}>
                    {
                      subMenuItem.vipRequired ? <span className='vip-icon'>L2</span> : <span className='free-icon'>L1</span>
                    }
                    {subMenuItem.name}
                    {
                      subMenuItem.isNew &&
                    <span className='tag-new'>new</span>
                    }
                  </Menu.Item>
                ))
              }
            </Menu.SubMenu>
          ))
        }
      </Menu>
    </MenuWrapper>
  );

  const renderTabBar = (props:any, DefaultTabBar:any) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          className='site-custom-tab-bar'
          style={{ ...style }} />
      )}
    </Sticky>
  );
  const menuVisible = useAppSelector((state) => state.ui.menuVisible);
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
  const reflowChart = () => {
    setTimeout(() => {
      try {
        const c = getChart();
        c && c.reflow();
        updateWidth();
      } catch (error) {
        console.error(error);
      }

    }, 800);
  };
  const toggleMenu = () => {
    dispatch(toggleMenuVisible({
      menuVisible: !menuVisible,
    }));
    reflowChart();
  };
  const [curActiveKey, setCurActiveKey] = useState('');
  const showMenus = (e:any) => {
    if (e === curActiveKey) {
      toggleMenu();
    } else {
      dispatch(toggleMenuVisible({
        menuVisible: true,
      }));
      reflowChart();
    }
    setCurActiveKey(e);
  };

  const userInfo = useAppSelector((state) => state.user.userInfo);
  const collection = useAppSelector((state) => state.user.userInfo.collection);
  const [menusPc, setMenus] = useState(indiceMenus);
  useEffect(() => {
    if (!userInfo.collection) {
      return;
    }
    const collectionSubMenus = [] as any;
    userInfo.collection.keyPaths.forEach((kp) => {
      const menu = menus.find((item) => item.key === kp.menuKey);
      if (!menu) {
        return;
      }
      const subMenu = menu.subMenus.find((item) => item.key === kp.subMenuKey);
      subMenu && collectionSubMenus.push(subMenu);
    });
    menus[0].subMenus = collectionSubMenus;
    const newMenus = ([] as any).concat(menus);
    setMenus(newMenus);
  }, [userInfo, collection]);

  const { TabPane } = Tabs;
  const Pc = (
    <MenuWrapperPC>
      <StickyContainer>
        <Tabs
          type='card'
          tabPosition={'left'}
          onTabClick={ (activeKey:string) => showMenus(activeKey) }
          defaultActiveKey='sub1'
        >
          {
            menusPc.filter((Item) => Item.assetList.indexOf(`${asset}`) > -1).map((menuItem) => (
              <TabPane
                tab={
                  <div className='tab-cell'>
                    <div>
                      { menuItem.icon }
                    </div>
                    <div className='tab-cell-name'>
                      { menuItem.name }
                    </div>
                  </div>
                }
                key={menuItem.key}>
                <div
                  className='tab-content-wrapper'>
                  <div className='tab-content-title'>
                    <h2>{ menuItem.name } </h2>
                    <span
                      className='toggle-btn'
                      onClick={toggleMenu}><ArrowLeftOutlined />
                    </span>
                  </div>
                  {
                    menuItem.subMenus.filter((Item) => Item.assetList.indexOf(`${asset}`) > -1).map((subMenuItem) => (
                      <div
                        onClick={ () => onSelect({ keyPath: [subMenuItem.key, menuItem.key] })}
                        className='tab-content'
                        key={subMenuItem.key}
                        style={ selctedKey === subMenuItem.key ? { background: '#3c3c3c' } : {} }
                      >
                        <div>
                          {
                            subMenuItem.vipRequired ?
                              <span className='vip-icon'>L2</span> :
                              <span className='free-icon'>L1</span>
                          }
                          <span style={ selctedKey === subMenuItem.key ? { color: 'white' } : {} }>{subMenuItem.name}</span>
                          {
                            subMenuItem.isNew &&
                              <span className='tag-new'>new</span>
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
              </TabPane>
            ))
          }
        </Tabs>
      </StickyContainer>
    </MenuWrapperPC>
  );
  return isMobile() ? Mobile : Pc;
});
