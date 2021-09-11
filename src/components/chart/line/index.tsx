// 第三方
import { memo } from 'react';

// 图标React 封装
import HighchartsReact from 'highcharts-react-official';
import { getHighCharts, setChart } from '../index';

import { constructorType } from '../def';
import { commonOptions } from '../option_common';
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

const convert = (data:TypeDataRow):[number, number][] => {
  const newData:[number, number][] = [];
  data.forEach((item) => {
    let { t: x, v: y } = item;

    // 类型容错
    if (typeof x === 'string') {
      x = parseFloat(x);
    }
    if (typeof y === 'string') {
      y = parseFloat(y);
    }
    // JS的时间戳和unix的 相差* 1000
    const xv = x * 1000;

    const yv = y;
    newData.push([xv, yv]);
  });
  return newData;
};

export default memo(function LSChartDoubleLine(props:IProps) {
  const { seriesA, seriesB } = props;
  const{ data: dataA, name: nameA } = seriesA;
  const{ data: dataB, name: nameB } = seriesB;

  let options = mergeOptions;

  // TODO: highchart option ts config
  (options.series[0] as any).data = convert(dataA);
  (options.series[1] as any).data = convert(dataB);
  (options.series[0] as any).name = nameA;
  (options.series[1] as any).name = nameB;
  options = Object.assign({}, options);

  const callback = (chart:Highcharts.Chart) => {
    setChart(chart);
  };

  return (
    // doc: https://www.highcharts.com.cn/docs/highcharts-react/
    // eg: https://stackblitz.com/edit/react-nwseym?file=index.js
    <HighchartsReact
      highcharts={ getHighCharts() }
      constructorType={ constructorType.stockChart }
      options={ options }
      callback={ callback }
    />
  );
});
