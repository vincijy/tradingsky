// 第三方
import React, { memo } from 'react';
import { getChart } from '@/components/chart';
import { ExportingOptions, ExportingMimeTypeValue } from 'highcharts';
import { useAppSelector } from '@/hooks';
import { getAnnotationManager } from '@/utils/annotation';
import ToolBoxCell from './dropdown_cell';
import { ToolBoxCellName } from './def';

export default memo(function ExportCell() {
  const menus = ['png', 'jpg', 'pdf'];
  const exportFileName = useAppSelector((state) => state.ui.currentMenu.subMenu.name );
  const exportChart = (menu:string) => {
    const type = menu;
    const c = getChart();
    if (!c) {
      console.error('Chart not init');
      return;
    }
    const el = document.querySelector('.highcharts-background');
    if (!el) {
      return;
    }
    let exportType:ExportingMimeTypeValue = 'image/png';
    switch (type) {
      case 'png':
        exportType = 'image/png';
        break;
      case 'jpg':
        exportType = 'image/jpeg';
        break;
      case 'pdf':
        exportType = 'application/pdf';
        break;
      default:
        exportType = 'image/png';
        break;
    }
    const { width } = el.getBoundingClientRect();
    const exportOption:ExportingOptions = {
      width, // 图片宽
      sourceWidth: width, // 图表宽
      type: exportType,
      filename: exportFileName,
      // fallbackToExportServer: false,
    };
    const ano = getAnnotationManager();
    c.exportChartLocal(exportOption, {
      chart: {
        events: {
          load: function(){
            if (!ano) {
              return;
            }
            ano.circleStorage.forEach((c) => {
              this.renderer.circle(c.option.x, c.option.y, c.option.r).attr(c.attrs).add();
            });
          },
        },
      },
    });
  };
  return (
    <ToolBoxCell
      name={ ToolBoxCellName.Export }
      selectCallback={ (menu:string) => exportChart(menu) }
      menuList={ menus }
    />
  );
});
