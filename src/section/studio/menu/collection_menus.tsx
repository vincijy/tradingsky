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

import { HeartOutlined } from '@ant-design/icons';
import { filter, includes } from 'lodash';
import { updateChartOption } from '@store/chart/action';
import { commonOptions } from '@indices/chart_common';

import { mergeOption } from '@utils/merge_option';
import { isMobile, isPad } from '@utils/is';
import { SubMenuItem } from '@indices/def';
import { changeMenu, toggleChartRecreated, toggleMenuVisible } from '../../../store/ui/action';
import { MenuWrapper } from './style';
interface IProps {
  selectCallback:() => void;
  onOpenChangeCallback:() => void;
}
export default memo(function CollectionMenus(props:IProps) {
  const { selectCallback, onOpenChangeCallback } = props;
  const dispatch = useAppDispatch();
  const { menu: selectedMenu, subMenu: selectedSubMenu } = useAppSelector((state) => state.ui.currentMenu);

  const userInfo = useAppSelector((state) => state.user.userInfo);
  const collection = useAppSelector((state) => state.user.userInfo.collection);
  const [menus, setMenus] = useState(indiceMenus);
  useEffect(() => {
    if (!userInfo.collection) {
      return;
    }
    const collectionSubMenus:SubMenuItem[] = [];
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

  const asset = useAppSelector((state) => state.chart.dataAsset);
  /**
   * 根据菜单的路径更新redux
   * @param e 读取菜单的路径
   * @returns void
   */
  const onSelect = (e:{keyPath:string[]}) => {
    selectCallback();
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
    onOpenChangeCallback();
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
        <Menu.SubMenu
          key='我的收藏'
          icon={<HeartOutlined />}
          title='我的收藏'
          className='my-favorite'>
          {
            menus[0] && menus[0].subMenus &&
              menus[0].subMenus.map((subMenu__) =>
                <Menu.Item key={`${subMenu__.key}`}>
                  {
                    subMenu__.vipRequired ?
                      <span className='vip-icon'>L2</span> :
                      <span className='free-icon'>L1</span>
                  }
                  { subMenu__.name }
                </Menu.Item>,
              )
          }
        </Menu.SubMenu>
      </Menu>
    </MenuWrapper>
  );
});
