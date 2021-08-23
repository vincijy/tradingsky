// 第三方
import React, { memo, useState } from 'react';

import { useDispatch } from 'react-redux';

// 功能
import { menus } from '@/config/menu'; // 分类数据

// 组件
import { Menu } from 'antd';
import { changeMenu } from '../../store/action';

import { MenuWrapper } from './style';

export default memo(function LSChartMenu() {
  // state/props
  const [openKeys, setOpenKeys] = useState(['sub1']);

  // other handle
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9',
    'sub10', 'sub11', 'sub12', 'sub13', 'sub14', 'sub15', 'sub16', 'sub17', 'sub18', 'sub19' ];

  // handle function
  // TODO: fix type
  const onOpenChange = (keys:any) => {
    const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const dispatch = useDispatch();
  const onSelect = (e:{keyPath:string[]}) => {
    const { keyPath } = e;
    const [subMenuKey, menuKey] = keyPath;

    const selectedMenu = menus.find((menu) => menu.key === menuKey)?.
      subMenus.find((subMenu) => subMenu.key === subMenuKey);

    if (!selectedMenu) {
      console.error('Not found sub menu');
      return;
    }
    const action = changeMenu({
      selectedSubMenu: selectedMenu,
    });
    dispatch(action);
  };

  return (
    <MenuWrapper>
      <Menu
        mode='inline'
        onSelect={ onSelect }
        openKeys={openKeys}
        onOpenChange={onOpenChange} >
        {
          menus.map((menuItem) => (
            <SubMenu
              key={menuItem.key}
              icon={menuItem.icon}
              title={menuItem.name}>
              {
                menuItem.subMenus.map((subMenuItem) => (
                  <Menu.Item
                    key={subMenuItem.key}>
                    {subMenuItem.name}
                  </Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
      </Menu>
    </MenuWrapper>
  );
});
