/* eslint-disable prefer-const */
// 第三方
import { memo } from 'react';

// 图标React 封装
import HighchartsReact from 'highcharts-react-official';
import { useAppSelector } from '@/hooks';
import { mergeOption } from '@/utils/merge_option';
import { commonOptions } from '@/indices/chart_common';
import { IDate } from '@/indices/def';
import { cloneDeep } from 'lodash';
import { getHighCharts, setChart } from '../index';

import { constructorType } from '../def';
import * as D from './def';
import { convert, cutDataByDate, assignSmaDataToSerie } from './util';
interface IRow{
  index:number; t:number; o:any;
}
export default memo(function LSChartDoubleLine(props:D.IProps) {
  const { seriesA, seriesB } = props;
  const{ data: dataA } = seriesA;
  const{ data: dataB } = seriesB;

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

  if (price) {
    const priceV = dataMayCut(convert(dataB).v, startDate);
    if (currentMenu.key === 'Stock-to-Flow 模型') {
      const plotLines = options.xAxis.plotLines;
      price.data = priceV.map((item) => ({ x: item[0], y: item[1] }));
      const t0 = plotLines[0].value;
      const t1 = plotLines[1].value;
      const t2 = plotLines[2].value;
      const t3 = plotLines[3].value;
      const dt0 = t1 - t0;
      const dt1 = t2 - t1;
      const dt2 = t3 - t2;
      for (const cell of price.data) {
        if (cell.x < t0) {
          cell.colorValue = 1400 - ((t0 - cell.x) / dt0 * 1400);
        } else if (t0 < cell.x && cell.x <= t1) {
          cell.colorValue = (cell.x - t0) / dt0 * 1400;
        } else if(t1 < cell.x && cell.x <= t2) {
          cell.colorValue = (cell.x - t1) / dt1 * 1400;
        } else if (t2 < cell.x && cell.x <= t3) {
          cell.colorValue = (cell.x - t2) / dt2 * 1400;
        } else {
          cell.colorValue = (cell.x - t2) / dt2 * 1400;
        }
      }
    } else {
      price.data = priceV;
    }
  }

  const handleMultiIndices = (startDate:IDate|null) => {
    // 指标配置上的name必须对应得上
    let ks:string[] = [];
    ks = ks.concat(D.CURRENCIES).concat(['v_cvdd', 'v_pru']);
    const sma = series.find((s:D.ISerie) => s.id === 'sma');
    for (const name of ks) {
      const serie = series.find((s) => s.name === name);
      if (serie) {
        const res = convert(dataA);
        console.log(res);
        const data:[number, number][] = (res as any)[name];
        serie.data = dataMayCut(data, startDate);
        console.log(serie.data);
        sma && assignSmaDataToSerie(series[0], sma);
      }
    }
  };

  const handleNormalIndices = (startDate:IDate|null) => {
    const data = convert(dataA).v;
    series[0].data = dataMayCut(data, startDate);
    const sma = series.find((s:D.ISerie) => s.id === 'sma');
    sma && assignSmaDataToSerie(series[0], sma);
  };

  const handleOData = (keysOfO:string[], startDate:IDate|null) => {
    const o = {} as any;
    keysOfO.forEach((k) => {
      o[k] = [];
    });
    const data = dataA as IRow[];
    data.forEach((item) => {
      // JS的时间戳和unix的 相差* 1000
      const x = item.t * 1000;
      for (const key of Object.keys(o)) {
        if (!(item as any)['o']) {
          continue;
        }
        const value = ((item as any)['o'] as any)[key];
        if (value !== undefined) {
          (o as any)[key].push([x, value]);
        }
      }
    });

    for (const name of Object.keys(o)) {
      const serie = series.find((s) => s.name === name);
      const sma = series.find((s) => s.id === 'sma');
      if (serie) {
        const data:[number, number][] = (o as any)[name];
        serie.data = dataMayCut(data, startDate);
        sma && assignSmaDataToSerie(serie, sma);
      }
    }
  };

  // '稳定币累计流通量' 特殊情况处理 TODO分离出特定逻辑, 由外部注入
  if (currentMenu.key === '稳定币累计流通量' || currentMenu.key === 'CVDD底部指标') {
    handleMultiIndices(startDate);
  } else if (currentMenu.key === '持有年龄分布') {
    const o = [
      '24h',
      '1d_1w',
      '1w_1m',
      '1m_3m',
      '3m_6m',
      '6m_12m',
      '1y_2y',
      '2y_3y',
      '3y_5y',
      '5y_7y',
      '7y_10y',
      'more_10y',
    ];
    handleOData(o, startDate);
  } else if (currentMenu.key === '出售时的年龄分布占比') {
    const o = [
      '1h',
      '1h_24h',
      '1d_1w',
      '1w_1m',
      '1m_3m',
      '3m_6m',
      '6m_12m',
      '1y_2y',
      '2y_3y',
      '3y_5y',
      '5y_7y',
      '7y_10y',
      'more_10y',
    ];
    handleOData(o, startDate);
  } else if (currentMenu.key === '哈希带') {
    const o = [
      'buy',
      'capitulation',
      'crossed',
      'ma30',
      'ma60',
    ];
    handleOData(o, startDate);
  } else if(currentMenu.key === '难度彩虹带') {
    const o = [
      'ma200',
      'ma128',
      'ma90',
      'ma60',
      'ma40',
      'ma25',
      'ma14',
      'ma9',
    ];
    handleOData(o, startDate);
  } else if(currentMenu.key === 'Stock-to-Flow 模型') {
    const o = [
      'daysTillHalving',
      'ratio',
    ];
    handleOData(o, startDate);
  } else {
    handleNormalIndices(startDate);
  }

  /**
   * 通过回调拿到chart实例.
   * @param chart Highcharts.Chart
   */
  const callback = (chart:Highcharts.Chart) => {
    // TODO: 顺序重构mergeOption
    const copy = cloneDeep(commonOptions);

    if (copy.chart && copy.chart.plotBackgroundImage) {
      delete (copy.chart as any).plotBackgroundImage;
    }

    const ops = mergeOption(chart.options, copy);
    chart.update(ops, true);
    setChart(chart);
  };

  const recreate = useAppSelector((state) => state.ui.chartRecreated);
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
