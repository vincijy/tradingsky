// 第三方
import React, { memo, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { getAnnotationManager } from '@/utils/annotation';
import { privateDefaultOptions } from '@/indices/chart_private_default';
// 功能
import { menus } from '@/indices'; // 分类数据

// 组件
import { Menu } from 'antd';
import { filter, includes } from 'lodash';
import { updateChartOption } from '@/store/chart/action';
import { commonOptions } from '@/indices/chart_common';
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
    console.log('onSelect');
    const { keyPath } = e;
    const [subMenuKey, menuKey] = keyPath;

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

    // 根据菜单修改自定义图表配置
    if (s.chart) {
      dispatch(updateChartOption({
        options: Object.assign(commonOptions, s.chart),
      }));
    } else {
      dispatch(updateChartOption({
        options: Object.assign(commonOptions, privateDefaultOptions),
      }));
    }

    // 清空, TODO: fix bug
    const an = getAnnotationManager();
    an && an.clearAnnotationCircle();
  };

  const [openKeys, setOpenKeys] = React.useState([selectedMenu.key]);

  const onOpenChange = (keys:React.Key[]) => {
    const newOpenKeys = filter(keys, (k) => !includes(openKeys, k));
    setOpenKeys(newOpenKeys as string[]);
  };

  return (
    <MenuWrapper>
      <Menu
        mode='inline'
        defaultOpenKeys={[]}
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
