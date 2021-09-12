// 第三方
import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateChartOption } from '@/store/chart/action';
import { getChart } from '@/components/chart';
import ToolBoxCell from './dropdown_cell';
import { ToolBoxCellName } from './def';

export default memo(function SmaCell() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.ui.currentMenu.subMenu.name);
  const setSma = (selectedMenu:string) => {
    const chart = getChart();
    if (!chart || !chart.options) {
      console.error('Chart not init yet');
      return;
    }

    // TODO: fix type
    const newOptions = Object.assign({}, chart.options) as any;
    const serie = newOptions.series.find((s:any) => s.type === 'sma');
    serie.name = `${name}(${selectedMenu}均线)`;

    const period = parseInt(selectedMenu.replace('日', ''));
    serie.params = {
      period: period,
    };
    dispatch(updateChartOption({
      options: newOptions,
    }));
  };

  const menus = [0, 7, 14, 30, 50, 90].map((n) => `${n}日`);
  return (
    <ToolBoxCell
      name={ ToolBoxCellName.Sma }
      selectCallback={(menu:string) => setSma(menu)}
      menuList={menus}
    />
  );
});
