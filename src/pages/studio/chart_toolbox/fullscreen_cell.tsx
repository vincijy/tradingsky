
// 第三方
import React, { memo, useEffect } from 'react';
import { getChart } from '@/components/chart';
import { ExpandOutlined } from '@ant-design/icons';
import { getAnnotationManager } from '@/utils/annotation';
import ToggleBtnCell from './toggle_btn_cell';
import { ToolBoxCellName } from './def';

export default memo(function FullScreenCell() {
  const toggleFullScreen = (currentStatus:boolean) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    c.fullscreen.open();
    const ano = getAnnotationManager();
    ano && ano.rePaint();
  };

  useEffect(() => {
    if (document.addEventListener) {
      document.addEventListener('webkitfullscreenchange', exitHandler, false);
      document.addEventListener('mozfullscreenchange', exitHandler, false);
      document.addEventListener('fullscreenchange', exitHandler, false);
      document.addEventListener('MSFullscreenChange', exitHandler, false);
    }
    function exitHandler() {
      const doc = document as any;
      if (!doc.webkitIsFullScreen && !doc.mozFullScreen && !doc.msFullscreenElement) {
        console.log('Exiting fullscreen. Doing chart stuff.');
        const ano = getAnnotationManager();
        ano && ano.rePaint();
      }
    }
  }, []);

  const getTrueStatusIcon = () => (
    // hack: 因为全屏就看不到这个按钮了, 所以都是 '非全屏'
    <ExpandOutlined className='toolbox-btn-icon'/>
  );
  const getFalseStatusIcon = () => (
    <ExpandOutlined className='toolbox-btn-icon'/>
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
