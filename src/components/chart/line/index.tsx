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
  r:{
    o:{
      v:string;
    };
    t:string;
  };
};

export default memo(function LSChartDoubleLine(props:D.IProps) {
  const { seriesA, seriesB } = props;
  const{ data: dataA } = seriesA;
  const{ data: dataB } = seriesB;

  const options = useAppSelector((state) => state.chart.options);
  const xStart = useAppSelector((state) => state.ui.currentMenu.subMenu.xStart);
  const asset = useAppSelector((state) => state.chart.dataAsset);
  const currentMenu = useAppSelector((state) => state.ui.currentMenu.subMenu);
  const series = options.series as D.ISerie[];

  // 确定对应币种的起始切割时间
  let startDate = null;
  if (xStart && xStart[asset] !== undefined) {
    startDate = xStart[asset];
  }

  // 根据起始时间切割数据
  const dataMayCut = (data:[number, number][], startDate:IDate|null) => {
    const res:[number, number][] = startDate ? cutDataByDate(data, startDate) : data;
    return res;
  };

  // 处理STOF 价格线 彩虹
  const handlePriceSTOF = (priceV:[number, number][]) => {
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
  };

  // 价格线处理
  const price = options.series.find((s:D.ISerie) => s.name === '价格');
  if (!price) {
    console.error('Not price line', currentMenu.name);
  }

  if (price) {
    const d = convert(dataB).v;
    if (!d) {
      console.error('Cannot convert data');
    }
    const priceV = dataMayCut(d, startDate);
    // 对于Stock-to-Flow 模型模型价格线需要特殊处理
    if (currentMenu.key === 'Stock-to-Flow 模型') {
      handlePriceSTOF(priceV);
    } else {
      price.data = priceV;
    }
  }

  const handleData = (startDate:IDate|null) => {
    // 目的是为了构造出 类似这样的数据 res = { v: [[1, 345], [2, 234]], m: [[1, 456], [2, 555]]}
    const rows = dataA as IRow[];
    if (rows.length === 0) {
      return;
    }
    const res:{[k:string]:[number, number]} = {};
    const firstRow = rows[0];

    // check
    const oKeys = Object.keys(firstRow.r.o);

    oKeys.forEach((k) => {
      (res as any)[k] = [];
    });
    rows.forEach((row:IRow) => {
      // JS的时间戳和unix的 相差* 1000
      const r = row.r;
      const x = parseInt(r.t) * 1000;
      const oValues = r.o as any;
      for (const key of oKeys) {
        const value = oValues[key];
        if (value !== undefined && value !== null && value !== '') {
          (res as any)[key].push([x, parseFloat(value)]);
        }
        if (typeof value === 'number') {
          (res as any)[key].push([x, value]);
        }
      }
    });
    const sma = series.find((s) => s.id === 'sma');
    // 对于单指标, v
    if (oKeys.includes('v')) {
      const serie = series[0];
      const data:[number, number][] = (res as any)['v'];
      serie.data = dataMayCut(data, startDate);
      sma && assignSmaDataToSerie(serie, sma);
      return;
    }
    for (const name of oKeys) {
      // TODO: 后端接口发过来x开头的指标名, 因为数据库表名不给数字开头
      let serie = series.find((s) => s.id === name || `x${s.id}` === name);
      if (!serie) {
        continue;
      }
      const data:[number, number][] = (res as any)[name];
      serie.data = dataMayCut(data, startDate);
      sma && assignSmaDataToSerie(serie, sma);
    }
  };

  handleData(startDate);

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
  // doc: https://www.highcharts.com.cn/docs/highcharts-react/
  // eg: https://stackblitz.com/edit/react-nwseym?file=index.js
  return (
    <HighchartsReact
      highcharts={ getHighCharts() }
      constructorType={ constructorType.stockChart }
      options={ options }
      callback={ callback }
      immutable={ recreate }
    />
  );
});
