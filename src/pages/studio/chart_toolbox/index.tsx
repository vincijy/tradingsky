// 第三方
import React, { memo, useState } from 'react';
import { useAppSelector } from '@/hooks';
import { ToolBoxWrapper } from './style';
import ExportCell from './export_cell';
import SmaCell from './sma_cell';
import FullScreenCell from './fullscreen_cell';
import AnnotationCell from './annotation_cell';

export default memo(function LSChartToolbox() {
  const width = useAppSelector((state) => state.ui.layout.chartBoxWidth);

  const annotation = useAppSelector((state) => state.ui.currentMenu.subMenu.toolbox?.annotation);
  const sma = useAppSelector((state) => state.ui.currentMenu.subMenu.toolbox?.sma);

  return (
    <ToolBoxWrapper style={{ width: `${width}px` }}>
      <div className='toolbox-content'>
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
  );
});
