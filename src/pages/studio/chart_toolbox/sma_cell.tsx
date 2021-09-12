// 第三方
import React, { memo } from 'react';
import ToolBoxCell from './dropdown_cell';
import { ToolBoxCellName } from './def';

export default memo(function SmaCell() {
  const menus = [0, 7, 14, 30, 50, 90].map((n) => `${n}天`);
  const setSma = (selectedMenu:string) => {
    console.log(selectedMenu);
  };
  return (
    <ToolBoxCell
      name={ ToolBoxCellName.Sma }
      selectCallback={(menu:string) => setSma(menu)}
      menuList={menus}
    />
  );
});
