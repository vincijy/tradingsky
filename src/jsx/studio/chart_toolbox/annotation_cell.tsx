
// 第三方
import React, { memo } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { getAnnotationManager } from '@/utils/annotation';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { toggleAnnotation } from '@/store/chart/action';
import ToggleBtnCell from './toggle_btn_cell';
import { ToolBoxCellName } from './def';

export default memo(function AnnotationCell() {
  const dispatch = useAppDispatch();
  const annotationVisible = useAppSelector((state) => state.chart.annotationVisible);
  const ano = getAnnotationManager();

  if (annotationVisible) {
    ano && ano.drawAnnotationCircle();
  } else {
    ano && ano.clearAnnotationCircle();
  }

  const toggle = () => {
    dispatch(toggleAnnotation({
      annotationVisible: !annotationVisible,
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
      clickCallback={() => toggle()}
      trueStatusText='显示'
      falseStatusText='隐藏'
      currentStatus={annotationVisible}
      TrueStatusIcon={ () => getTrueStatusIcon() }
      FalseStatusIcon={ () => getFalseStatusIcon() }
    />
  );
});
