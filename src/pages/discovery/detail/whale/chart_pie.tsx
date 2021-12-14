import React, { memo, useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import { options } from './options';
interface IProps {
  data:any;
  otherData:any;
}

export default memo(function ChartPie(props:IProps) {

  const { data } = props;
  const { otherData } = props;

  const [ops, setOps] = useState(options);

  const others = {
    name: 'others',
    y: otherData,
    balance: 0,
  };

  const newData = [...data, others];
  useEffect(() => {
    // 将外部组件传入的值data赋个ops.series[0].data
    (ops as any).series[0].data = newData;
    setOps({ ...ops });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <HighchartsReact
      constructorType={ 'chart' }
      options={ ops }
    />
  );
});
