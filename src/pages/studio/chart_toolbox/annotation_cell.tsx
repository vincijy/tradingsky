
// 第三方
import React, { memo } from 'react';
import { getChart } from '@/components/chart';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import ToggleBtnCell from './toggle_btn_cell';
import { ToolBoxCellName } from './def';

export default memo(function AnnotationCell() {

  const createCircle = (x:number, y:number, r:number, color:string) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    const circle = c.renderer.circle(x, y, r)
      .attr({
        fill: '#FFFFFF',
        stroke: color,
        'stroke-width': 2,
        zIndex: 0,
        'stroke-dasharray': 5,
      })
      .add();
    return circle;
  };

  const createCircleByPoint = (p:any, color:string) => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    const x = p.plotX + c.plotLeft;
    const y = p.plotY + c.plotTop;
    createCircle(x, y, 20, color);
  };

  const test = () => {
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }

    const point1 = c.series[0].data[c.series[0].data.length - 5] as any;
    createCircleByPoint(point1, 'red');

    const point2 = c.series[1].data[c.series[1].data.length - 5] as any;
    createCircleByPoint(point2, 'green');

    const point3 = c.series[1].data[c.series[1].data.length - 8] as any;
    createCircleByPoint(point3, 'green');
  };

  const toggle = (currentStatus:boolean) => {
    console.log(currentStatus);
    test();
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
