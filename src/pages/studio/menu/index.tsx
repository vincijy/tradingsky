// 第三方
import React, { memo } from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks';

// 功能
import { menus } from '@/config/menu'; // 分类数据

// 组件
import { Menu } from 'antd';
import { filter, includes } from 'lodash';
import { changeMenu } from '../../../store/ui/action';

import { MenuWrapper } from './style';

export default memo(function LSChartMenu() {
  const dispatch = useAppDispatch();

  const { menu: selectedMenu, subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);
  /**
   * 根据菜单的路径更新redux
   * @param e 读取菜单的路径
   * @returns void
   */
  const onSelect = (e:{keyPath:string[]}) => {
    const { keyPath } = e;
    const [subMenuKey, menuKey] = keyPath;

    const selectedMenuItem = menus.find((item) => item.key === menuKey);

    if (!selectedMenuItem) {
      console.error('selectedMenuItem not found');
      return;
    }

    const selectedSubMenuItem = selectedMenuItem.subMenus.find((item) => item.key === subMenuKey);

    if (!selectedSubMenuItem) {
      console.error('Not found selectedSubMenuItem');
      return;
    }
    const action = changeMenu({
      currentMenu: {
        menu: selectedMenuItem,
        subMenu: selectedSubMenuItem,
      },
    });
    dispatch(action);
  };

  const [openKeys, setOpenKeys] = React.useState([selectedMenu.key]);
  const onOpenChange = (keys:React.Key[]) => {
    const newOpenKeys = filter(keys, (k) => !includes(openKeys, k));
    setOpenKeys(newOpenKeys as any);
  };

  return (
    <MenuWrapper>
      <Menu
        mode='inline'
        defaultOpenKeys={['ss']}
        onSelect={ onSelect }
        selectedKeys={[selectedMenu.key, selectedSubMenu.key]}
        openKeys={openKeys} // 一级菜单展开项
        onOpenChange={onOpenChange} // 监听打开的
      >
        {
          menus.map((menuItem) => (
            <Menu.SubMenu
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
            </Menu.SubMenu>
          ))
        }
      </Menu>
    </MenuWrapper>
  );
});
