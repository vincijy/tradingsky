/* eslint-disable prefer-const */
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
import { convert, cutDataByDate, assignSmaDataToSerie } from './util';

interface IRow{
  index:number; t:number; o:any;
}
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

  if (price) {
    const priceV = dataMayCut(convert(dataB).v, startDate);
    price.data = priceV;
  }

  const handleMultiIndices = (startDate:IDate|null) => {
    // 指标配置上的name必须对应得上
    let ks:string[] = [];
    ks = ks.concat(D.CURRENCIES).concat(['v_cvdd', 'v_pru']);
    const sma = series.find((s:D.ISerie) => s.type === 'sma');
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
    const sma = series.find((s:D.ISerie) => s.type === 'sma');
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
      const sma = series.find((s) => s.type === 'sma');
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
      '1d_1w',
      '1m_3m',
      '1w_1m',
      '1y_2y',
      '2y_3y',
      '3m_6m',
      '3y_5y',
      '5y_7y',
      '6m_12m',
      '7y_10y',
      '24h',
      'more_10y',
    ];
    handleOData(o, startDate);
  } else if (currentMenu.key === '出售时的年龄分布占比') {
    const o = [
      '1d_1w',
      '1h',
      '1h_24h',
      '1m_3m',
      '1w_1m',
      '1y_2y',
      '2y_3y',
      '3m_6m',
      '3y_5y',
      '5y_7y',
      '6m_12m',
      '7y_10y',
    ];
    handleOData(o, startDate);
  } else if(currentMenu.key === '难度彩虹带') {
    const o = [
      'ma9',
      'ma14',
      'ma25',
      'ma40',
      'ma60',
      'ma90',
      'ma128',
      'ma200',
    ];
    handleOData(o, startDate);
  } else if(currentMenu.key === '哈希带') {
    const o = [
      'buy',
      'capitulation',
      'crossed',
      'ma30',
      'ma60',
    ];
    handleOData(o, startDate);
  } else if (currentMenu.key === 'Stock-to-Flow 模型') {
    const o = [
      'daysTillHalving',
      'ratio',
    ];
    handleOData(o, startDate);
  }
  else {
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
