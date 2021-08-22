// 第三方
import React, { memo, useEffect, useState } from 'react';

// 图标React 封装
import HighchartsReact from 'highcharts-react-official';
import { getHighCharts } from '../index';

import { constructorType } from '../def';
import { commonOptions } from '../common_option';
import { options } from './option';
import { data } from './mock_data';

interface IProps {
    chartData:{t:number, v:number}[];
}
export default memo(function LSChartDoubleLine(props:IProps) {
  const { chartData } = props;

  chartData;

  // 合并options
  const mergeOptions = Object.assign(commonOptions, options);
  const [chartOptions, setChartOptions] = useState(mergeOptions);

  const A:[number, number][] = [];
  const B:[number, number][] = [];

  useEffect(() => {
    data.forEach((item:any) => {
      const { t: x, v: y } = item;
      // JS的时间戳和unix的 相差* 1000
      A.push([x * 1000, y]);
      B.push([x * 1000, y + 1000000]);
    });
    // TODO: fix type
    (chartOptions.series[0] as any).data = A;
    (chartOptions.series[1] as any).data = B;

    const newOptions = Object.assign({}, chartOptions);
    setChartOptions(newOptions);
  }, [chartData]);


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
