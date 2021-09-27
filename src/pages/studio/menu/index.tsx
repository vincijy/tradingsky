// 第三方
import React, { memo } from 'react';
import { Select } from 'antd';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { getAnnotationManager } from '@/utils/annotation';
import { privateDefaultOptions } from '@/indices/chart_private_default';
// 功能
import { menus } from '@/indices'; // 分类数据
import { changeAsset } from '@/store/chart/action';

// 组件
import { Menu } from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { filter, includes } from 'lodash';
import { updateChartOption } from '@/store/chart/action';
import { commonOptions } from '@/indices/chart_common';
import btcLogo from '@/assets/img/btc_logo.png';
import ethLogo from '@/assets/img/eth_logo.svg';

import { mergeOption } from '@/utils/merge_option';
import { isMobile } from '@/utils/is';
import { SubMenuItem } from '@/indices/def';
import { changeMenu, toggleChartRecreated, toggleMenuVisible } from '../../../store/ui/action';
import { MenuWrapper } from './style';

export default memo(function LSChartMenu() {
  const dispatch = useAppDispatch();

  const { menu: selectedMenu, subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);

  const collection = useAppSelector((state) => state.user.userInfo.collection);

  if(collection) {
    // TODO
    const collectionSubMenus:SubMenuItem[] = [];
    collection.keyPaths.forEach((kp) => {
      const menu = menus.find((item) => item.key === kp.menuKey);
      if (!menu) {
        return;
      }
      const subMenu = menu.subMenus.find((item) => item.key === kp.subMenuKey);
      subMenu && collectionSubMenus.push(subMenu);
    });
    menus[0].subMenus = collectionSubMenus;
  }

  const asset = useAppSelector((state) => state.chart.dataAsset);
  /**
   * 根据菜单的路径更新redux
   * @param e 读取菜单的路径
   * @returns void
   */
  const onSelect = (e:{keyPath:string[]}) => {
    const { keyPath } = e;
    // eslint-disable-next-line prefer-const
    let [subMenuKey, menuKey] = keyPath;
    const prefix = 'collection:';
    if (subMenuKey.includes(prefix)) {
      subMenuKey = subMenuKey.split(':')[1];
    }
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
    const action = changeMenu({
      currentMenu: {
        menu: selectedMenuItem,
        subMenu: s,
      },
    });
    dispatch(action);

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
    s.toolbox && s.toolbox.annotation.enabled && ano && ano.rePaint();

    isMobile() && dispatch(toggleMenuVisible({
      menuVisible: false,
    }));
  };

  const [openKeys, setOpenKeys] = React.useState([selectedMenu.key]);

  const onOpenChange = (keys:React.Key[]) => {
    const newOpenKeys = filter(keys, (k) => !includes(openKeys, k));
    setOpenKeys(newOpenKeys as string[]);
  };

  const changeDataAsset = (value:'eth' | 'btc') => { // 币种切换
    if (value === 'btc'){
      const action = changeAsset({
        dataAsset: 'btc',
      });

      dispatch(action);
    } else if (value === 'eth'){
      const action = changeAsset({
        dataAsset: 'eth',
      });

      dispatch(action);
    }
    dispatch(updateChartOption({
      options: selectedSubMenu.chart[value],
    }));
  };

  const exceptFirst = menus.slice(1);

  return (
    <MenuWrapper>
      <div className='asset-select'>
        <Select
          onSelect={ changeDataAsset }
          defaultValue={asset}
          style={{ width: 260 }} >
          <Select.Option value='btc'><img
            src={btcLogo}
            height='16px'
            style={{ marginRight: '3px' }}/>比特币
          </Select.Option>
          <Select.Option value='eth'><img
            src={ethLogo}
            height='16px'
            style={{ marginRight: '3px' }}/>以太坊
          </Select.Option>
        </Select>
      </div>
      <Menu
        mode='inline'
        defaultOpenKeys={[]}
        onSelect={ onSelect }
        selectedKeys={[selectedMenu.key, selectedSubMenu.key]}
        openKeys={openKeys} // 一级菜单展开项
        onOpenChange={onOpenChange} // 监听打开的
      >
        <Menu.SubMenu
          key='我的收藏'
          icon={<HeartOutlined />}
          title='我的收藏'
          className='my-favorite'>
          {
            menus[0] && menus[0].subMenus &&
              menus[0].subMenus.map((subMenu__) =>
                <Menu.Item key={`collection:${subMenu__.key}`}>
                  {
                    subMenu__.vipRequired ? <span className='vip-icon'>L2</span> : <span className='free-icon'>L1</span>
                  }
                  { subMenu__.name }
                </Menu.Item>,
              )
          }
        </Menu.SubMenu>
        {
          exceptFirst.filter((Item) => Item.assetList.indexOf(`${asset}`) > -1).map((menuItem) => (
            <Menu.SubMenu
              key={menuItem.key}
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
                  </Menu.Item>
                ))
              }
            </Menu.SubMenu>
          ))
        }
      </Menu>
    </MenuWrapper>
  );
});
