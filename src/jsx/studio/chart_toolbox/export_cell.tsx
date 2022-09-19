// 第三方
import React, { memo } from 'react';
import { getChart, setChart } from '@components/chart';
import { ExportingOptions, ExportingMimeTypeValue, ChartEventsOptions } from 'highcharts';
import { useAppSelector } from '@hooks';
import { getAnnotationManager } from '@utils/annotation';
import { cloneDeep } from 'lodash';
import ToolBoxCell from './dropdown_cell';
import { ToolBoxCellName } from './def';
// import { ChartLoadCallbackFunction } from 'highcharts';
export default memo(function ExportCell() {
  // TODO: 'pdf'
  const menus = ['png', 'jpg'];
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
    /**
     * ISSUE: https://github.com/gevgeny/angular2-highcharts/issues/158
     * Workaround is to store the original chartObject before export and restore after
     */
    const copyOfChartInstance = cloneDeep(c);
    const ano = getAnnotationManager();
    c.exportChartLocal(exportOption, {
      chart: {
        events: {
          load: function(){
            setChart(copyOfChartInstance);
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
    setChart(copyOfChartInstance);
  };
  return (
    <ToolBoxCell
      name={ ToolBoxCellName.Export }
      selectCallback={ (menu:string) => exportChart(menu) }
      menuList={ menus }
    />
  );
});
