
// 第三方
import React, { memo } from 'react';
import { getChart } from '@/components/chart';
import { FullscreenExitOutlined } from '@ant-design/icons';
import ToggleBtnCell from './toggle_btn_cell';
import { ToolBoxCellName } from './def';

export default memo(function FullScreenCell() {
  const toggleFullScreen = (currentStatus:boolean) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    console.log(currentStatus);
    currentStatus === true ? c.fullscreen.open() : c.fullscreen.close();
  };

  const getTrueStatusIcon = () => (
    // hack: 因为全屏就看不到这个按钮了, 所以都是 '非全屏'
    <FullscreenExitOutlined className='toolbox-btn-icon'/>
  );
  const getFalseStatusIcon = () => (
    <FullscreenExitOutlined className='toolbox-btn-icon'/>
  );
  return (
    <ToggleBtnCell
      name={ ToolBoxCellName.FullScreen }
      clickCallback={(currentStatus:boolean) => toggleFullScreen(currentStatus)}
      trueStatusText='非全屏' // hack: 因为全屏就看不到这个按钮了, 所以文本都是 '非全屏'
      falseStatusText='非全屏'
      defaultStatus={ false }
      TrueStatusIcon={ () => getTrueStatusIcon() }
      FalseStatusIcon={ () => getFalseStatusIcon() }
    />
  );
});
