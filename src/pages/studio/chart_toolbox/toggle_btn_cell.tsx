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
    defaultStatus:boolean;

    /**
     * @param currentStatus 当前状态
     */
    clickCallback:(currentStatus:boolean) => void;

    /**
     * cell 标题
     */
    name:ToolBoxCellName;
}

export default memo(function ToggleBtnCell(props:IProps) {
  const { trueStatusText, falseStatusText, defaultStatus, clickCallback, name } = props;
  const { TrueStatusIcon, FalseStatusIcon } = props;
  const [currentStatus, setCurrentStatus] = useState(defaultStatus);

  const doClick = (e:React.MouseEvent) => {
    e.preventDefault();
    const newStatus = !currentStatus;
    setCurrentStatus(newStatus);
    clickCallback(newStatus);
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
            { currentStatus === true ? trueStatusText : falseStatusText }
          </div>
          <div
            className='toolbox-cell-text-down'
          >
            { name }
            { currentStatus === true ?
              TrueStatusIcon() :
              FalseStatusIcon()
            }
          </div>
        </div>
      }
    </ToolBoxCellWrapper>
  );
});
