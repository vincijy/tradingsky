// 第三方
import React, { memo, useEffect, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ToolBoxCellWrapper } from './style';
import { ToolBoxCellName } from './def';
interface IProps {
    /**
     * 下拉菜单列表
     */
    menuList:string[];
    /**
     * @param selectedMenu: 选中的菜单选项
     */
    selectCallback:(selectedMenu:string) => void;

    /**
     * 标题
     */
    name:ToolBoxCellName;

    /**
     * 默认初始选项值
     */
    defaultSeleted?:string;
}

export default memo(function ToolboxCell(props:IProps) {
  const { menuList, selectCallback, name, defaultSeleted } = props;
  const menus = menuList;
  if (menus.length === 0) {
    console.error('menuList should contain at least one menu');
  }
  const [seleted, setSeleted] = useState(menus[0]);

  // https://thewebdev.info/2021/03/14/how-to-fix-the-react-usestate-hook-not-setting-initial-value-problem/
  useEffect(() => {
    defaultSeleted && setSeleted(defaultSeleted);
  }, [defaultSeleted]);

  const selectMenu = (type:string) => {
    setSeleted(type);
    selectCallback(type);
  };
  const getMenuList = () => (
    <Menu>
      {
        menus.map((type:string) => (
          <Menu.Item
            key={ `${type}` }
            onClick={ () => selectMenu(type) }
          >
            { type }
          </Menu.Item>
        ))
      }
    </Menu>
  );
  return (
    <ToolBoxCellWrapper>
      {
        <Dropdown
          overlay={getMenuList()}
          placement='bottomRight'>
          <div
            className='ant-dropdown-link toolbox-cell-dropdown'
            onClick={(e) => e.preventDefault()}>
            <div className='toolbox-cell-text-up'>{ name }</div>
            <div className='toolbox-cell-text-down'>{ seleted }
              <DownOutlined className='toolbox-btn-icon-dropdown'/>
            </div>
          </div>
        </Dropdown>
      }
    </ToolBoxCellWrapper>
  );
});
