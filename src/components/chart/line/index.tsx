// 第三方
import React, { memo, useEffect, useState } from 'react';

// 图标React 封装
import HighchartsReact from 'highcharts-react-official';
import { getHighCharts } from '../index';

import { constructorType } from '../def';
import { commonOptions } from '../common_option';
import { TypeDataRow } from '../def';
import { options } from './option';

interface IProps {
    /**
     * 左侧y轴数据
     */
    seriesA:{
      name:string;
      data:TypeDataRow;
    };

    /**
     * 右侧y轴数据
     */
    seriesB:{
      name:string;
      data:TypeDataRow;
    };
}

// 合并options
const mergeOptions = Object.assign(commonOptions, options);

export default memo(function LSChartDoubleLine(props:IProps) {
  const { seriesA, seriesB } = props;
  const{ data: dataA, name: nameA } = seriesA;
  const{ data: dataB, name: nameB } = seriesB;

  const [chartOptions, setChartOptions] = useState(mergeOptions);

  useEffect(() => {
    const a:[number, number][] = [];
    const b:[number, number][] = [];

    dataA.forEach((item:any) => {
      const { t: x, v: y } = item;
      // JS的时间戳和unix的 相差* 1000
      const xv = parseFloat(x) * 1000;
      const yv = parseFloat(y);
      a.push([xv, yv]);
    });

    dataB.forEach((item:any) => {
      const { t: x, v: y } = item;
      // JS的时间戳和unix的 相差* 1000
      const xv = parseFloat(x) * 1000;
      const yv = parseFloat(y);
      b.push([xv, yv]);
    });

    (chartOptions.series[0] as any).data = a;
    (chartOptions.series[0] as any).name = nameA;

    (chartOptions.series[1] as any).data = b;
    (chartOptions.series[1] as any).name = nameB;

    const newOptions = Object.assign({}, chartOptions);
    setChartOptions(newOptions);
  }, [dataA, dataB]);

  return (
    // doc: https://www.highcharts.com.cn/docs/highcharts-react/
    // eg: https://stackblitz.com/edit/react-nwseym?file=index.js
    <HighchartsReact
      highcharts={ getHighCharts() }
      constructorType={ constructorType.stockChart }
      options={ chartOptions }
    />
  );
});
