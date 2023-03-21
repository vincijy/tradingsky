// 第三方
import React, { memo, useState, useEffect } from 'react';
import { useAppSelector } from '@hooks';
import { ToolBoxWrapper, BorderLineTop, BorderLineBottom } from './style';
import ExportCell from './export_cell';
import SmaCell from './sma_cell';
import FullScreenCell from './fullscreen_cell';
import AnnotationCell from './annotation_cell';

export default memo(function LSChartToolbox() {
  const width = useAppSelector((state) => state.ui.layout.chartBoxWidth);

  const annotation = useAppSelector((state) => state.ui.currentMenu.subMenu.toolbox?.annotation);
  const sma = useAppSelector((state) => state.ui.currentMenu.subMenu.toolbox?.sma);
  // style={{ width: `${width}px` }}

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div>
      <BorderLineTop style={{ width: `${width}px` }} />
      <ToolBoxWrapper>
        <div
          className='toolbox-content'
          style={{ display: visible ? 'inline-block' : 'none' }}>
          <ul>
            <li>
              { annotation && annotation.enabled && <AnnotationCell /> }
            </li>
            <li>
              { sma && sma.enabled && <SmaCell/> }
            </li>
            <li>
              <ExportCell/>
            </li>
            <li>
              <FullScreenCell/>
            </li>
          </ul>
        </div>
      </ToolBoxWrapper>
      <BorderLineBottom style={{ width: `${width}px` }} />
    </div>

  );
});
