// 第三方
import React, { memo, useState } from 'react';
import { ToolBoxCellWrapper } from './style';
import { ToolBoxCellName } from './def';

interface IProps {
    /**
     * true 状态下的文本
     */
    trueStatusText:string;

    /**
     * true 状态下的图标
     */
    TrueStatusIcon:() => any;

    /**
     * false 状态下的文本
     */
    falseStatusText:string;

    /**
     * false状态下的图标
     */
    FalseStatusIcon:() => any;

    /**
     * 默认状态
     */
     currentStatus:boolean;

    /**
     *
     */
    clickCallback:() => void;

    /**
     * cell 标题
     */
    name:ToolBoxCellName;
}

export default memo(function ToggleBtnCell(props:IProps) {
  const { currentStatus, clickCallback, name, TrueStatusIcon, FalseStatusIcon } = props;
  const doClick = (e:React.MouseEvent) => {
    e.preventDefault();
    clickCallback();
  };

  return (
    <ToolBoxCellWrapper>
      {
        <div
          className='toolbox-cell'
          onClick={ (e:React.MouseEvent) => doClick(e) }
        >
          <div
            className='toolbox-cell-text-up'
          >
            { name }
          </div>
          <div
            className='toolbox-cell-text-down'
          >
            {
              currentStatus === true ? TrueStatusIcon() : FalseStatusIcon()
            }
          </div>
        </div>
      }
    </ToolBoxCellWrapper>
  );
});
