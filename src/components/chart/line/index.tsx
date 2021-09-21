// 第三方
import { memo } from 'react';

// 图标React 封装
import HighchartsReact from 'highcharts-react-official';
import { useAppSelector } from '@/hooks';
import { mergeOption } from '@/utils/merge_option';
import { commonOptions } from '@/indices/chart_common';
import { IDate } from '@/indices/def';
import { getHighCharts, setChart } from '../index';

import { constructorType } from '../def';
import * as D from './def';
import { convert, cutDataByDate } from './util';

export default memo(function LSChartDoubleLine(props:D.IProps) {
  const { seriesA, seriesB } = props;
  const{ data: dataA, name: nameA } = seriesA;
  const{ data: dataB, name: nameB } = seriesB;

  const options = useAppSelector((state) => state.chart.options);
  const xStart = useAppSelector((state) => state.ui.currentMenu.subMenu.xStart);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const currentMenu = useAppSelector((state) => state.ui.currentMenu.subMenu);
  const series = options.series as D.ISerie[];
  let startDate = null;
  if (xStart && xStart[asset] !== undefined) {
    startDate = xStart[asset];
  }

  const dataMayCut = (data:[number, number][], startDate:IDate|null) => {
    const res:[number, number][] = startDate ? cutDataByDate(data, startDate) : data;
    return res;
  };

  // 价格线处理
  const price = options.series.find((s:D.ISerie) => s.name === '价格');
  if (!price) {
    console.error('Not price line', currentMenu.name);
  }
  const priceV = dataMayCut(convert(dataB).v, startDate);

  const handleMultiIndices = (startDate:IDate|null) => {
    // 指标配置上的name必须对应得上
    for (const name of D.CURRENCIES) {
      const serie = series.find((s) => s.name === name);
      if (serie) {
        const res = convert(dataA);
        const data:[number, number][] = (res as any)[name];
        serie.data = dataMayCut(data, startDate);
      }
    }
  };

  const handleNormalIndices = (startDate:IDate|null) => {
    const data = convert(dataA).v;
    series[0].data = dataMayCut(data, startDate);
    price.data = priceV;

    const sma = series.find((s:D.ISerie) => s.type === 'sma');

    // 检查0日均线情况下, 均线不显示, 恢复显示原数据
    if (sma && sma.params) {
      if (sma.params.period === 0) {
        series[0].visible = true;
        series[0].showInLegend = true;
        sma.visible = false;
        sma.showInLegend = false;
      } else {
        series[0].visible = false;
        series[0].showInLegend = false;
        sma.visible = true;
        sma.showInLegend = true;
      }
    }
  };

  // '稳定币累计流通量' 特殊情况处理 TODO分离出特定逻辑, 由外部注入
  if (currentMenu.key === '稳定币累计流通量') {
    handleMultiIndices(startDate);
  } else {
    handleNormalIndices(startDate);
  }

  /**
   * 通过回调拿到chart实例.
   * @param chart Highcharts.Chart
   */
  const callback = (chart:Highcharts.Chart) => {
    // TODO: 顺序
    const ops = mergeOption(chart.options, commonOptions);
    chart.update(ops, true);
    setChart(chart);
  };
  const recreate = true;
  return (
    // doc: https://www.highcharts.com.cn/docs/highcharts-react/
    // eg: https://stackblitz.com/edit/react-nwseym?file=index.js
    <HighchartsReact
      highcharts={ getHighCharts() }
      constructorType={ constructorType.stockChart }
      options={ options }
      callback={ callback }
      immutable={ recreate }
    />
  );
});
