// 第三方
import { memo } from 'react';

// 图标React 封装
import HighchartsReact from 'highcharts-react-official';
import { useAppSelector } from '@/hooks';
import { getHighCharts, setChart } from '../index';

import { constructorType } from '../def';
import { TypeDataRow } from '../def';

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

  const options = useAppSelector((state) => state.chart.options);

  // TODO: highchart option ts config
  (options.series[0] as any).data = convert(dataA);
  (options.series[1] as any).data = convert(dataB);
  (options.series[0] as any).name = nameA;
  (options.series[1] as any).name = nameB;

  const sma = options.series.find((s:any) => s.type === 'sma');

  // 检查0日均线情况下, 均线不显示, 恢复显示原数据
  if (sma.params.period === 0) {
    (options.series[0] as any).visible = true;
    (options.series[0] as any).showInLegend = true;

    sma.visible = false;
    sma.showInLegend = false;
  } else {
    (options.series[0] as any).visible = false;
    (options.series[0] as any).showInLegend = false;

    sma.visible = true;
    sma.showInLegend = true;
  }

  /**
   * 通过回调拿到chart实例.
   * @param chart Highcharts.Chart
   */
  const callback = (chart:Highcharts.Chart) => {
    console.log('chart instance init...');
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
