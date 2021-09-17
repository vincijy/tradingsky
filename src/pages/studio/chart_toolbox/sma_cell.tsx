// 第三方
import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateChartOption } from '@/store/chart/action';
import { getChart } from '@/components/chart';
import { mergeOption } from '@/utils/merge_option';
import DropDownCell from './dropdown_cell';
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
    // 修改serie.name为xxx几日均线
    const newOptions = mergeOption({}, chart.options) as any;
    const serie = newOptions.series.find((s:any) => s.type === 'sma');
    serie.name = `${name}(${selectedMenu}均线)`;

    // 读取周期(数字)
    const period = parseInt(selectedMenu.replace('日', ''));

    // 修改图表配置的sma周期
    serie.params = {
      period: period,
    };
    dispatch(updateChartOption({
      options: newOptions,
    }));
  };

  // read sma, TODO: assert
  const defaultSeleted = useAppSelector((state) => state.chart.options.series[2].params.period);

  const menus = [0, 7, 14, 30, 50, 90, 180].map((n) => `${n}日`);
  return (
    <DropDownCell
      name={ ToolBoxCellName.Sma }
      selectCallback={(menu:string) => setSma(menu)}
      menuList={menus}
      defaultSeleted={`${defaultSeleted}日`}
    />
  );
});
