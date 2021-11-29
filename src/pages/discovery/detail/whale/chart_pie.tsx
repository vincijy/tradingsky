import React, { memo, useEffect, useState } from 'react';
import { Card, Input, Select, Row, Col, Tabs } from 'antd';

import { getCoin, getCoinList, getWhaleAddress, getWhaleTop, getRealTime, getAllPrice } from '@/api/discovery';
import HighchartsReact from 'highcharts-react-official';
import { options } from './options';
interface IProps {
  data:any;
}
export default memo(function ChartPie(props:IProps) {
  const { data } = props;

  const [ops, setOps] = useState(options);

  useEffect(() => {
    // 将外部组件传入的值data赋个ops.series[0].data
    (ops as any).series[0].data = data;

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
