
// 第三方
import React, { memo } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { getAnnotationManager } from '@/utils/annotation';
import { useAppDispatch } from '@/hooks';
import { toggleAnnotation } from '@/store/chart/action';
import ToggleBtnCell from './toggle_btn_cell';
import { ToolBoxCellName } from './def';

export default memo(function AnnotationCell() {
  const dispatch = useAppDispatch();
  const toggle = (currentStatus:boolean) => {
    const ano = getAnnotationManager();
    if (!ano) {
      return;
    }
    currentStatus ? ano.drawAnnotationCircle() : ano.clearAnnotationCircle();
    dispatch(toggleAnnotation({
      annotationVisible: currentStatus,
    }));
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
