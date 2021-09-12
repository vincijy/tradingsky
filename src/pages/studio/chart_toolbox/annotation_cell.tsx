
// 第三方
import React, { memo } from 'react';
import { getChart } from '@/components/chart';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import ToggleBtnCell from './toggle_btn_cell';
import { ToolBoxCellName } from './def';

export default memo(function AnnotationCell() {
  const toggle = (currentStatus:boolean) => {
    console.log(currentStatus);
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    // TODO: 补充批注逻辑
  };
  const getTrueStatusIcon = () => (
    <EyeOutlined className='toolbox-btn-icon'/>
  );
  const getFalseStatusIcon = () => (
    <EyeInvisibleOutlined className='toolbox-btn-icon'/>
  );
  return (
    <ToggleBtnCell
      name={ ToolBoxCellName.Annotation }
      clickCallback={(currentStatus:boolean) => toggle(currentStatus)}
      trueStatusText='显示'
      falseStatusText='隐藏'
      defaultStatus={ false }
      TrueStatusIcon={ () => getTrueStatusIcon() }
      FalseStatusIcon={ () => getFalseStatusIcon() }
    />
  );
});
